import DefaultLayout from '@/layout/DefaultLayout'
import Home from '@/pages/home'
import Movies from '@/pages/movies'
import OtherUserProfilePage from '@/pages/OtherUserProfilePage'
import Series from '@/pages/series'
import SignIn from '@/pages/signin'
import SignUp from '@/pages/signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/series',
        element: <Series />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/profile',
        element: <OtherUserProfilePage />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
