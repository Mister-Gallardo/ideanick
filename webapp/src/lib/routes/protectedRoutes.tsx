import type { RouteObject } from 'react-router-dom'

import MainLayout from '../../components/layouts'
import AllIdeasPage from '../../pages/AllIdeasPage'
import { EditIdeaPage } from '../../pages/EditIdeaPage'
import { EditProfilePage } from '../../pages/EditProfilePage'
import { NewIdeaPage } from '../../pages/NewIdeaPage'
import { NotFoundPage } from '../../pages/NotFoundPage'
import SignInPage from '../../pages/SignInPage'
import { SignOutPage } from '../../pages/SignOutPage'
import SignUpPage from '../../pages/SignUpPage'
import { ViewIdeaPage } from '../../pages/ViewIdeaPage'

export const protectedRoutes: RouteObject = {
  //   element: <ProtectedRoute />,
  children: [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <AllIdeasPage /> },
        { path: 'ideas/:ideaNick', element: <ViewIdeaPage /> },
        { path: '/ideas/:ideaNick/edit', element: <EditIdeaPage /> },
        { path: 'ideas/new', element: <NewIdeaPage /> },
        { path: 'edit-profile', element: <EditProfilePage /> },
        { path: 'sign-up', element: <SignUpPage /> },
        { path: 'sign-in', element: <SignInPage /> },

        { path: 'sign-out', element: <SignOutPage /> },

        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
}
