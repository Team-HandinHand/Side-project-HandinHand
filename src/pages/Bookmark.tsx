import { ActiveTab } from '@/components'
import { useState } from 'react'
import { useUserStore } from '@/stores/userStore'
import { MovieList } from '@/components/movieList/MovieList'
import * as L from '@/components/movies/Movies.styles'
import styled from 'styled-components'
const movies = [
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  },
  {
    title: '어벤져스: 인피니티 워',
    imageUrl: 'https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    date: '2021-01-27',
    isLoading: false
  }
]

export const Bookmark = () => {
  const [activeTab, setActiveTab] = useState<'영화' | '시리즈'>('영화')
  const { user } = useUserStore()
  const username = user?.nickname
  return (
    <L.MoviesContainer>
      <ActiveTabWrapper>
        <ActiveTab
          title={`${username}의 즐겨찾기 목록`}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </ActiveTabWrapper>
      <MovieList movies={movies} />
    </L.MoviesContainer>
  )
}
export const ActiveTabWrapper = styled.div`
  margin-bottom: var(--space-medium);
`
