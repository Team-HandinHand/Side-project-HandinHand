import { Suspense } from 'react'
import {
  QueryClient,
  QueryCache,
  QueryClientProvider,
  QueryErrorResetBoundary
} from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import toast, { Toaster } from 'react-hot-toast'
import { DeferredLoader, ErrorFallback } from './components'
import Router from './routes/router'
import GlobalStyle from './GlobalStyle'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // 백그라운드 리페치 에러는 토스트로 표시
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`에러가 발생했습니다: ${error.message}`)
      }
    }
  })
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            padding: 'var(--space-medium)',
            background: 'var(--color-white)',
            color: 'var(--color-text-dark)'
          }
        }}
      />
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            FallbackComponent={ErrorFallback}>
            <Suspense fallback={<DeferredLoader />}>
              <Router />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  )
}

export default App
