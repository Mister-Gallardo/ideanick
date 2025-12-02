import type { RouteObject } from 'react-router-dom'

import AllIdeasPage from '../../pages/AllIdeasPage'
import ViewIdeaPage from '../../pages/ViewIdeaPage'

export const protectedRoutes: RouteObject = {
  //   element: <ProtectedRoute />,
  //   children: [
  // {
  //   path: "/",
  //   element: <AuthorizedLayout />,
  children: [
    { path: '/', element: <AllIdeasPage /> },
    { path: 'ideas/:ideaNick', element: <ViewIdeaPage /> },
  ],
  // },
  //   ],
}
