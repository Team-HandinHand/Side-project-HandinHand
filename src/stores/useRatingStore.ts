import { create } from 'zustand'

type RatingStore = {
  rating: number
  setRating: (rating: number) => void
}

export const useRatingStore = create<RatingStore>(set => {
  return {
    rating: 0,
    setRating: rating => set({ rating })
  }
})
