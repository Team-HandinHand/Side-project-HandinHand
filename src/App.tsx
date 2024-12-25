import { Suspense } from 'react'
import {
  QueryClient,
  QueryCache,
  QueryClientProvider,
  QueryErrorResetBoundary
} from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import toast from 'react-hot-toast'
import { DeferredLoader, ErrorFallback } from '@/components'
import Router from './routes/router'
import GlobalStyle from './GlobalStyle'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // 백그라운드 리페치 에러는 토스트로 표시
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`Something went wrong: ${error.message}`)
      }
    }
  })
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
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
