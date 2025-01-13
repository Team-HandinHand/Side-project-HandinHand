import { QueryClient, QueryCache } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`에러가 발생했습니다: ${error.message}`)
      }
    }
  })
})

export default queryClient
