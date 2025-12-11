import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { AppContextProvider } from './lib/ctx.tsx'
import { router } from './lib/routes/routes.tsx'
import { TrpcProvider } from './lib/trpc.tsx'

import './styles/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <TrpcProvider>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </TrpcProvider>
    </HelmetProvider>
  </StrictMode>
)
