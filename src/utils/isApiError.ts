import { ApiError } from '@/types/error'

export const isApiError = (error: unknown): error is ApiError => {
  return error instanceof Error && 'status' in error
}
