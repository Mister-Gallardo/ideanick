import { createBrowserRouter } from 'react-router-dom'

import { protectedRoutes } from './protectedRoutes'

export const router = createBrowserRouter([protectedRoutes])
