import { createContext } from 'react'

type RatingContextType = {
  rating: number
  setRating: React.Dispatch<React.SetStateAction<number>>
}

export const RatingContext = createContext<RatingContextType | undefined>(
  undefined
)
