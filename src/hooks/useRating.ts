import { RatingContext } from '@/contexts/rating/RatingContext'
import { useContext } from 'react'

export const useRating = () => {
  const context = useContext(RatingContext)
  if (!context) {
    throw new Error('useRating must be used within a RatingProvider')
  }
  return context
}
