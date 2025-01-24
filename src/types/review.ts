export interface Review {
  id: string
  poster_path: string | null
  title: string
  release_date: string
  media_type: 'movie' | 'tv'
  comment: string | null
  comment_id: string
  rating: number
  created_at: string
}

export interface MovieReviewData {
  movie_id: string
  comment_id: string
  comment: string | null
  rating: number
  created_at: string
}

export interface DramaReviewData {
  drama_id: string
  comment_id: string
  comment: string | null
  rating: number
  created_at: string
}
