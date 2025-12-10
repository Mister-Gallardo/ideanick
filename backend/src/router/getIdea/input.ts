import { z } from 'zod'

export const zGetIdeaTrpcInput = z.object({
  ideaNick: z.string(),
})
