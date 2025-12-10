import { type Request } from 'express'

import type { User } from '../../generated/prisma/index.js'

export type ExpressRequest = Request & {
  user: User | undefined
}
