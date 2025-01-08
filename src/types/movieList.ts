export interface MovieListProps {
  movies: {
    title: string
    imageUrl: string
    date: string
    isLoading: boolean
  }[]
}
