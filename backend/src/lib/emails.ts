/* eslint-disable @typescript-eslint/no-explicit-any */
import { promises as fs } from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import fg from 'fast-glob'
import Handlebars from 'handlebars'
import { Resend } from 'resend'

import type { Idea, User } from '../../generated/prisma/index.js'

import { env } from './env.js'

const resend = new Resend(env.RESEND_API_KEY)

const __filenameESM = fileURLToPath(import.meta.url)
const __dirnameESM = dirname(__filenameESM)

const getHbrTemplates = (() => {
  let promise: Promise<Record<string, HandlebarsTemplateDelegate>> | null = null

  return async () => {
    if (!promise) {
      promise = (async () => {
        const htmlPathsPattern = path.resolve(__dirnameESM, '../emails/dist/**/*.html')
        const htmlPaths = fg.sync(htmlPathsPattern)
        const hbrTemplates: Record<string, HandlebarsTemplateDelegate> = {}
        for (const htmlPath of htmlPaths) {
          const templateName = path.basename(htmlPath, '.html')
          const htmlTemplate = await fs.readFile(htmlPath, 'utf8')
          hbrTemplates[templateName] = Handlebars.compile(htmlTemplate)
        }
        return hbrTemplates
      })()
    }
    return promise
  }
})()

const getEmailHtml = async (
  templateName: string,
  templateVariables: Record<string, string> = {}
) => {
  const hbrTemplates = await getHbrTemplates()
  const hbrTemplate = hbrTemplates[templateName]
  const html = hbrTemplate(templateVariables)
  return html
}

const sendEmail = async ({
  to,
  subject,
  templateName,
  templateVariables = {},
}: {
  to: string
  subject: string
  templateName: string
  templateVariables?: Record<string, any>
}) => {
  try {
    const fullTemplateVaraibles = {
      ...templateVariables,
      homeUrl: env.WEBAPP_URL,
    }

    const html = await getEmailHtml(templateName, fullTemplateVaraibles)

    // Тут добавляем реальную функцию отправки письма на почту
    // -----------------------------------------------------------
    const response = await resend.emails.send({
      from: 'My App <onboarding@resend.dev>',
      to,
      subject,
      html,
    })
    // -----------------------------------------------------------

    console.info('sendEmail', {
      to,
      subject,
      templateName,
      templateVariables,
      response,
    })

    return { ok: true }
  } catch (error) {
    console.error(error)
    return { ok: false }
  }
}

export const sendWelcomeEmail = async ({ user }: { user: Pick<User, 'nick' | 'email'> }) => {
  return await sendEmail({
    to: user.email,
    subject: 'Thanks For Registration!',
    templateName: 'welcome',
    templateVariables: {
      userNick: user.nick,
      addIdeaUrl: `${env.WEBAPP_URL}/ideas/new`,
    },
  })
}

export const sendIdeaBlockedEmail = async ({
  user,
  idea,
}: {
  user: Pick<User, 'email'>
  idea: Pick<Idea, 'nick'>
}) => {
  return await sendEmail({
    to: user.email,
    subject: 'Your Idea Blocked!',
    templateName: 'ideaBlocked',
    templateVariables: {
      ideaNick: idea.nick,
    },
  })
}
