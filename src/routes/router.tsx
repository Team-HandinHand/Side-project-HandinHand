import { useMemo } from 'react'
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
import useUserStore from '@/stores/useUserStore'
import { ErrorFallback } from '@/components'
import { PUBLIC_PATHS, AUTH_PATHS } from '@/constants/path'
import useAuthStateChange from '@/hooks/useAuthStateChange'
import { RatingProvider } from '@/contexts/rating/RatingProvider'

export const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserStore()
  const { pathname } = useLocation()
  useAuthStateChange()

  // console.log({
  //   user,
  //   pathname
  // })

  const routeCheck = useMemo(() => {
    const isPublicRoute = PUBLIC_PATHS.includes(
      pathname as (typeof PUBLIC_PATHS)[number]
    )
    const isAuthPath = AUTH_PATHS.includes(
      pathname as (typeof AUTH_PATHS)[number]
    )
    return { isPublicRoute, isAuthPath }
  }, [pathname])

  if (!user && !routeCheck.isPublicRoute)
    return (
      <Navigate
        to={'/signin'}
        replace
      />
    )
  if (user && routeCheck.isAuthPath) {
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
        element: (
          <RatingProvider>
            <MediaDetailsPage />
          </RatingProvider>
        )
      },
      {
        path: '/media-search',
        element: <MediaSearchPage />
      },
      {
        path: '/comments/detail/:type/:mediaId/:userId',
        element: (
          <RatingProvider>
            <CommentDetailPage />
          </RatingProvider>
        )
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
        path: '/review/:userId',
        element: <ReviewedList />
      },
      {
        path: '/bookmark/:userId',
        element: <Bookmark />
      }
    ]
  },
  { path: '*', element: <NotFoundPage /> }
])

export default function Router() {
  return <RouterProvider router={router} />
}
