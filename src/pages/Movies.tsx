import { PosterBox } from '@/components/common-ui/poster/PosterBox'
import * as S from '../components/movies/Movies.styles'
import { MovieFilters } from '@/components/movies/MovieFilters'

export const MoviesPage = () => {
  const labelValues = ['인기', '높은 평점', '현재 상영 중', '개봉 예정작']
  return (
    <S.MoviesContainer>
      <MovieFilters labelValues={labelValues} />
      <S.PosterContainer>
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
        <PosterBox
          title="어벤져스: 인피니티 워"
          imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          date="2021-01-27"
          isLoading={false}
        />
      </S.PosterContainer>
    </S.MoviesContainer>
  )
}
