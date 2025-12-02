import { trpcRouter } from './trpc.js'
import express from 'express'
import cors from 'cors'


                  import * as trpcExpress from "@trpc/server/adapters/express"
const expressApp = express()
expressApp.use(cors())

expressApp.get('/ping', (req, res) => {
  res.send('pong12356123!')
})

expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
)

expressApp.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
     })
