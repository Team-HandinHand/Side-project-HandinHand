import { useState, ReactNode } from 'react'
import { RatingContext } from './RatingContext'

type RatingProviderProps = {
  children: ReactNode
}

export const RatingProvider = ({ children }: RatingProviderProps) => {
  const [rating, setRating] = useState(0)

  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      {children}
    </RatingContext.Provider>
  )
}
