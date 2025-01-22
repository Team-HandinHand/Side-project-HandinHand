import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Navigate
} from 'react-router-dom'
import DefaultLayout from '@/layout/DefaultLayout'
import {
  HomePage,
  MoviesPage,
  SeriesPage,
  ReviewedList,
  Bookmark,
  SignUpPage,
  EditProfilePage,
  NotFoundPage,
  SignInPage,
  CommentDetailPage,
  MediaDetailsPage,
  MediaSearchPage
} from '@/pages'
//OtherUserProfilePage 추가 사용 예정
import { ErrorFallback } from '@/components'
import useAuth from '@/hooks/useAuth'
import { PUBLIC_PATHS } from '@/constants/path'

export const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()
  const { pathname } = useLocation()

  // console.log({
  //   user,
  //   pathname
  // })

  const isPublicRoute = PUBLIC_PATHS.includes(
    pathname as (typeof PUBLIC_PATHS)[number]
  )
  const AUTH_PATHS = ['/signin', '/signup']
  const isAuthPath = AUTH_PATHS.includes(pathname)
  if (!user && !isPublicRoute)
    return (
      <Navigate
        to={'/signin'}
        replace
      />
    )
  if (user && isAuthPath) {
    return (
      <Navigate
        to={'/'}
        replace
      />
    )
  }
  return children
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedPage>
        <DefaultLayout />
      </ProtectedPage>
    ),
    errorElement: <ErrorFallback />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/auth/callback',
        element: <HomePage />
      },
      {
        path: '/movies',
        element: <MoviesPage />
      },
      {
        path: '/series',
        element: <SeriesPage />
      },
      {
        path: '/media-details/:type/:mediaId',
        element: <MediaDetailsPage />
      },
      {
        path: '/media-search',
        element: <MediaSearchPage />
      },
      {
        path: '/comments/detail/:type/:mediaId/:userId',
        element: <CommentDetailPage />
      },
      {
        path: '/signup',
        element: <SignUpPage />
      },
      {
        path: '/signin',
        element: <SignInPage />
      },
      {
        path: '/edit-profile',
        element: <EditProfilePage />
      },
      {
        path: '/reviewedlist',
        element: <ReviewedList />
      },
      {
        path: '/bookmark',
        element: <Bookmark />
      }
    ]
  },
  { path: '*', element: <NotFoundPage /> }
])

export default function Router() {
  return <RouterProvider router={router} />
}
