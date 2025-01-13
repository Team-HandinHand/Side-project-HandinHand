import { MediaType } from './media'

export interface MediaFilterProps {
  type: MediaType
}

export interface MEdiaListProps {
  movies: {
    title: string
    imageUrl: string
    date: string
    isLoading: boolean
  }[]
}
