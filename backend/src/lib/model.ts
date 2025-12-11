import type { User } from '../../generated/prisma/index.js'

export const toClientMe = (user: User | null) => {
  return user && { id: user.id, nick: user.nick, name: user.name, permissions: user.permissions }
}
