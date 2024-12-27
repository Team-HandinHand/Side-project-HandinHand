import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import DefaultLayout from '@/layout/DefaultLayout'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/components'
import {
  HomePage,
  SignUpPage,
  SignInPage,
  EditProfilePage,
  MoviesPage,
  SeriesPage,
  NotFoundPage
} from '@/pages'
import { useFetchUser } from '@/hooks/queries/useFetchUser'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: user } = useFetchUser()

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

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DefaultLayout />
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
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
