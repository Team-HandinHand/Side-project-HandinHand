import { Suspense, useState } from 'react'
import {
  QueryClientProvider,
  QueryErrorResetBoundary
} from '@tanstack/react-query'
import queryClient from './services/react-query'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from 'react-error-boundary'
import { Toaster } from 'react-hot-toast'
import { DeferredLoader, ErrorFallback } from '@/components'
import Router from './routes/router'
import GlobalStyle from '@/styles/GlobalStyle'
import '@/styles/fonts.css'
import '@/styles/designToken.css'

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false) //ReactQueryDevtoolsPanel 열고 닫기

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
      <button
        onClick={() =>
          setIsOpen(!isOpen)
        }>{`${isOpen ? 'Close' : 'Open'} the devtools panel`}</button>
      {isOpen && (
        <ReactQueryDevtoolsPanel
          style={{ height: '200px' }}
          onClose={() => setIsOpen(false)}
        />
      )}
    </QueryClientProvider>
  )
}

export default App
