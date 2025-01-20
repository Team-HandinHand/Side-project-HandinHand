export const TV_CATEGORY_MAP = {
  인기: 'popular',
  '높은 평점': 'top_rated',
  '오늘 방송': 'airing_today',
  '방송 중': 'on_the_air'
} as const

export const MOVIE_CATEGORY_MAP = {
  인기: 'popular',
  '높은 평점': 'top_rated',
  '현재 상영 중': 'now_playing',
  '개봉 예정': 'upcoming'
} as const

export const TV_CATEGORIES = [
  'popular',
  'top_rated',
  'airing_today',
  'on_the_air'
] as const

export const MOVIE_CATEGORIES = [
  'popular',
  'top_rated',
  'now_playing',
  'upcoming'
] as const
