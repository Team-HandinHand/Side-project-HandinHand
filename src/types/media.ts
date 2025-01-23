export type MediaType = 'movie' | 'tv'
export type MovieCategory = 'popular' | 'top_rated' | 'now_playing' | 'upcoming'
export type TVCategory = 'popular' | 'top_rated' | 'airing_today' | 'on_the_air'

export type MediaCategory<T extends MediaType> = T extends 'movie'
  ? MovieCategory
  : TVCategory

export interface FetchMediasParams {
  type: MediaType
  category: MediaCategory<MediaType>
  page?: number
}

export interface FetchMediaMoreInfoParams {
  type: MediaType
  mediaId: number
  page?: number
}

export interface FetchSearchMediaParams {
  type: MediaType
  searchValue: string
  page?: number
}

export type MediaResponse =
  | NowPlayingMovie
  | PopularMovie
  | TopRatedMovie
  | UpcomingMovie
  | Tv

export type MediaResult = MovieResult | TvResult

export interface MediaListProps {
  medias?: MediaResult[]
  isLoading: boolean
  flex?: boolean
}

// Movies
export interface Dates {
  maximum: string // 종영일
  minimum: string // 개봉일
}

export interface NowPlayingMovie {
  dates: Dates // 현재 상영 중인 영화의 날짜 정보
  page: number // 현재 페이지 번호
  results: MovieResult[] // 영화 결과 배열
  total_pages: number // 총 페이지 수
  total_results: number // 총 결과 수
}

export interface PopularMovie {
  page: number // 현재 페이지 번호
  results: MovieResult[] // 인기 영화 결과 배열
  total_pages: number // 총 페이지 수
  total_results: number // 총 결과 수
}

export interface TopRatedMovie {
  page: number // 현재 페이지 번호
  results: MovieResult[] // 최고 평점 영화 결과 배열
  total_pages: number // 총 페이지 수
  total_results: number // 총 결과 수
}

export interface UpcomingMovie {
  dates: Dates // 다가오는 영화의 날짜 정보
  page: number // 현재 페이지 번호
  results: MovieResult[] // 다가오는 영화 결과 배열
  total_pages: number // 총 페이지 수
  total_results: number // 총 결과 수
}

export interface MovieResult {
  adult: boolean // 성인 콘텐츠 여부
  backdrop_path: string | null // 배경 이미지 경로 (null일 수 있음)
  genre_ids: number[] // 장르 ID 배열
  id: number // 영화 ID
  original_language: string // 원래 언어
  original_title: string // 원래 제목
  overview: string // 영화 개요
  popularity: number // 인기 점수
  poster_path: string | null // 포스터 이미지 경로 (null일 수 있음)
  release_date: string // 개봉일
  title: string // 영화 제목
  video: boolean // 비디오 여부
  vote_average: number // 평균 투표 점수
  vote_count: number // 투표 수
}

// Movie Detail
// Genre, ProductionCompany, ProductionCountry,SpokenLanguage 는 Tv에서도 쓰임
export interface Genre {
  id: number // 장르 ID
  name: string // 장르 이름
}
export interface ProductionCompany {
  id: number // 회사 ID
  logo_path: string | null // 로고 경로는 null일 수 있음
  name: string // 회사 이름
  origin_country: string // 원산지 국가
}
export interface ProductionCountry {
  iso_3166_1: string // ISO 3166-1 코드
  name: string // 국가 이름
}
export interface SpokenLanguage {
  english_name: string // 영어 이름
  iso_639_1: string // ISO 639-1 코드
  name: string // 언어 이름
}

export interface MovieDetails {
  adult: boolean
  backdrop_path: string | null // 배경 경로는 null일 수 있음
  belongs_to_collection: string | null // 컬렉션 정보는 null일 수 있음
  budget: number // 예산
  genres: Genre[] // 장르 배열
  homepage: string // 홈페이지 URL (빈 문자열일 수 있음)
  id: number // 영화 ID
  imdb_id: string // IMDb ID
  origin_country: string[] // 원산지 국가 배열
  original_language: string // 원래 언어
  original_title: string // 원래 제목
  overview: string // 개요
  popularity: number // 인기 점수
  poster_path: string | null // 포스터 경로는 null일 수 있음
  production_companies: ProductionCompany[] // 제작 회사 배열
  production_countries: ProductionCountry[] // 제작 국가 배열
  release_date: string // 개봉일
  revenue: number // 수익
  runtime: number // 러닝타임 (분)
  spoken_languages: SpokenLanguage[] // 사용 언어 배열
  status: string // 상태 (예: Released)
  tagline: string // 태그라인 (빈 문자열일 수 있음)
  title: string // 영화 제목
  video: boolean // 비디오 여부
  vote_average: number // 평균 투표 점수
  vote_count: number // 투표 수
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string // 어느 분야로 유명한지
  name: string
  original_name: string
  popularity: number // 유명도
  profile_path: string | null
  cast_id: number
  character: string // 배역
  credit_id: string
  order: number
}

export interface Crew {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  credit_id: string
  department: string // 파트
  job: string // 역할
}

export interface MovieCredits {
  id: number // 영화 ID
  cast: Cast[]
  crew: Crew[]
}

export interface MovieSearchResults {
  page: number // 영화 ID
  results: MovieResult[]
  total_pages: number // 총 페이지 수
  total_results: number // 총 결과 수
}

// Tv
export interface Tv {
  page: number // 현재 페이지 번호
  results: TvResult[] // 드라마 결과 배열
  total_pages: number // 총 페이지 수
  total_results: number // 총 결과 수
}

export interface TvResult {
  adult: boolean // 성인 콘텐츠 여부
  backdrop_path: string | null // 배경 이미지 경로 (null일 수 있음)
  genre_ids: number[] // 장르 ID 배열
  id: number // 드라마 ID
  origin_country: string[] // 원산지 국가 배열
  original_language: string // 원래 언어
  original_name: string // 원래 제목
  overview: string // 드라마 개요
  popularity: number // 인기 점수
  poster_path: string | null // 포스터 이미지 경로 (null일 수 있음)
  first_air_date: string // 첫 방영일
  name: string // 드라마 제목
  vote_average: number // 평균 투표 점수
  vote_count: number // 투표 수
}

// Tv Detail
export interface CreatedBy {
  id: number
  credit_id: string
  name: string
  original_name: string
  gender: number
  profile_path: string
}
export interface LastEpisodeToAir {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  episode_type: string
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string | null // 스틸컷
}
export interface NextEpisodeToAir {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  episode_type: string
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string | null
}

// 방영 플랫폼
export interface Network {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export interface Season {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}

export interface TvDetails {
  adult: boolean
  backdrop_path: string | null
  created_by: CreatedBy[]
  episode_run_time: number[] // 회차당 런타임
  first_air_date: string // 첫 방송일
  genres: Genre[]
  homepage: string
  id: number
  in_production: boolean // 공개 여부
  languages: string[]
  last_air_date: string
  last_episode_to_air: LastEpisodeToAir
  name: string
  next_episode_to_air: NextEpisodeToAir
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  seasons: Season[]
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export interface TvCredits {
  cast: Cast[]
  crew: Crew[]
  id: number
}

export interface TvSearchResults {
  page: number // 영화 ID
  results: TvResult[]
  total_pages: number // 총 페이지 수
  total_results: number // 총 결과 수
}

export type MediaDetails = MovieDetails | TvDetails
export type MediaCredits = MovieCredits | TvCredits
export type MediaSerchResults = MovieSearchResults | TvSearchResults

export interface InfiniteData<T> {
  pages: T[]
  pageParams: number[]
}

// media infinite fetch 쿼리에서 쓰는 파라미터
export interface FetchMediasParamsForQuery<T extends MediaType> {
  type: T
  category: T extends 'movie' ? MovieCategory : TVCategory
}

// 쿼리 제네릭 타입
export type FetchMediasQKType<T extends MediaType> = [
  'Medias',
  T,
  T extends 'movie' ? MovieCategory : TVCategory
]

export type FetchMediasForNoAuthHomeQKType = ['MediasForNoAuthHome', MediaType]

export type MediaSearchQKType = [string, MediaType, string]
