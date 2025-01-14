import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useLocation
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
import { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/components'
import useAuthStateChange from '@/hooks/useAuthStateChange'
import { PUBLIC_PATHS } from '@/constants/path'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthStateChange()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // console.log({
  //   user,
  //   pathname
  // })

  useEffect(() => {
    if (
      !user &&
      !PUBLIC_PATHS.includes(pathname as (typeof PUBLIC_PATHS)[number])
    ) {
      navigate('/signin', { replace: true })
    } else if (
      user &&
      PUBLIC_PATHS.includes(pathname as (typeof PUBLIC_PATHS)[number])
    ) {
      navigate('/', { replace: true })
    }
  }, [user, pathname, navigate])

  return children
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AuthProvider>
          <DefaultLayout />
        </AuthProvider>
      </ErrorBoundary>
    ),
    errorElement: <NotFoundPage />,
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
        path: '/comments/detail',
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
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
