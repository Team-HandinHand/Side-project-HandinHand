import { TApiError } from '@/types/error'

export const isApiError = (error: unknown): error is TApiError => {
  return error instanceof Error && 'status' in error
}
