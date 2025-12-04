import type { RouteObject } from 'react-router-dom'

import MainLayout from '../../components/layouts'
import AllIdeasPage from '../../pages/AllIdeasPage'
import { NewIdeaPage } from '../../pages/NewIdeaPage'
import ViewIdeaPage from '../../pages/ViewIdeaPage'

export const protectedRoutes: RouteObject = {
  //   element: <ProtectedRoute />,
  children: [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <AllIdeasPage /> },
        { path: 'ideas/:ideaNick', element: <ViewIdeaPage /> },
        { path: 'ideas/new', element: <NewIdeaPage /> },
      ],
    },
  ],
}
