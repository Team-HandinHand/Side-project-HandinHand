export type ReviewWithMedia = {
  comment_id: string
  media_id: string
  comment: string | null
  rating: number | null
  created_at: string
  mediaResults: {
    poster_path: string | null
    title?: string
    name?: string
  }
  title: string
}

export type MovieReview = {
  comment_id: string
  movie_id: string
  comment: string | null
  rating: number | null
  created_at: string
  movieResults: {
    poster_path: string | null
    title: string
  }
}

export type DramaReview = {
  comment_id: string
  drama_id: string
  comment: string | null
  rating: number | null
  created_at: string
  dramaResults: {
    poster_path: string | null
    name: string
  }
}
