import { ActiveTab } from '@/components'
import { useState } from 'react'
import { useUserStore } from '@/stores/userStore'
import { MovieList } from '@/components/movieList/MovieList'
import { MoviesContainer } from '@/components/movies/Movies.styles'
import { ActiveTabWrapper } from '@/components/bookmark/Bookmark.styles'
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
    <MoviesContainer>
      <ActiveTabWrapper>
        <ActiveTab
          title={`${username}의 즐겨찾기 목록`}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </ActiveTabWrapper>
      <MovieList movies={movies} />
    </MoviesContainer>
  )
}
