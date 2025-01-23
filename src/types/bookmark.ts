export type MovieBookmark = {
  movie_id: string
  movieResults: {
    id: string
    poster_path: string | null
    title: string
    release_date: string
  }
}

export type DramaBookmark = {
  drama_id: number
  dramaResults: {
    id: string
    poster_path: string | null
    name: string
    first_air_date: string
  }
}
