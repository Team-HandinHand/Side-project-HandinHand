import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
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
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/components'
import { useUserStore } from '@/stores/userStore'
import { useAuthStateChange } from '@/hooks/useAuthStateChange'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserStore()

  if (!user) {
    return (
      <Navigate
        to="/signin"
        replace
      />
    ) // 인증되지 않은 경우 리다이렉트
  }

  return children
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  useAuthStateChange()
  return <>{children}</>
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
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        )
      },
      {
        path: '/auth/callback',
        element: <HomePage />
      },
      {
        path: '/movies',
        element: (
          <ProtectedRoute>
            <MoviesPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/series',
        element: (
          <ProtectedRoute>
            <SeriesPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/media-details/:type/:mediaId',
        element: (
          <ProtectedRoute>
            <MediaDetailsPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/media-search',
        element: (
          <ProtectedRoute>
            <MediaSearchPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/comments/detail',
        element: (
          <ProtectedRoute>
            <CommentDetailPage />
          </ProtectedRoute>
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
        element: (
          <ProtectedRoute>
            <EditProfilePage />
          </ProtectedRoute>
        )
      },
      {
        path: '/reviewedlist',
        element: (
          <ProtectedRoute>
            <ReviewedList />
          </ProtectedRoute>
        )
      },
      {
        path: '/bookmark',
        element: (
          <ProtectedRoute>
            <Bookmark />
          </ProtectedRoute>
        )
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}

// 개발용 - 로그인 생랼
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//         <AuthProvider>
//           <DefaultLayout />
//         </AuthProvider>
//       </ErrorBoundary>
//     ),
//     errorElement: <NotFoundPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />
//       },
//       {
//         path: '/auth/callback',
//         element: <HomePage />
//       },
//       {
//         path: '/movies',
//         element: <MoviesPage />
//       },
//       {
//         path: '/series',
//         element: <SeriesPage />
//       },
//       {
//         path: '/media-details/:type/:mediaId',
//         element: <MediaDetailsPage />
//       },
//       {
//         path: '/media-search',
//         element: <MediaSearchPage />
//       },
//       {
//         path: '/comments/detail',
//         element: <CommentDetailPage />
//       },
//       {
//         path: '/signup',
//         element: <SignUpPage />
//       },
//       {
//         path: '/signin',
//         element: <SignInPage />
//       },
//       {
//         path: '/edit-profile',
//         element: <EditProfilePage />
//       },
//       {
//         path: '/reviewedlist',
//         element: <ReviewedList />
//       },
//       {
//         path: '/bookmark',
//         element: <Bookmark />
//       }
//     ]
//   }
// ])
