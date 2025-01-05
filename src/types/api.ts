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

// Drama

export interface Drama {
  page: number // 현재 페이지 번호
  results: DramaResult[] // 드라마 결과 배열
  total_pages: number // 총 페이지 수
  total_results: number // 총 결과 수
}

export interface DramaResult {
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

// Movie Detail

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

export interface MovieDetail {
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

// Drama Detail

export interface DramaDetail {
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
