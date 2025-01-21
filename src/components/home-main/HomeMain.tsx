import { useState } from 'react'
import * as S from './HomeMain.styles'
import { Button } from '@/components/common-ui/button/Button'
import useFetchInfiniteMedias from '@/hooks/queries/useFetchInfiniteMedias'
import { useNavigate } from 'react-router-dom'
import checkIsMovie from '@/utils/checkIsMovie'

export const HomeMain = () => {
  const [nowPlayingIndex, setNowPlayingIndex] = useState(0)
  const [popularIndex, setPopularIndex] = useState(0)
  const [topRatedIndex, setTopRatedIndex] = useState(0)
  const [upcomingIndex, setUpcomingIndex] = useState(0)
  const [airingTodayIndex, setAiringTodayIndex] = useState(0)
  const [isFadingNowPlaying, setIsFadingNowPlaying] = useState(false)
  const [isFadingTopRated, setIsFadingTopRated] = useState(false)
  const [isFadingPopular, setIsFadingPopular] = useState(false)
  const [isFadingUpcoming, setIsFadingUpcoming] = useState(false)
  const [isFadingAiringToday, setIsFadingAiringToday] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<'movie' | 'tv'>(
    'movie'
  )

  console.log(isFadingAiringToday) //임시로 작성
  const navigate = useNavigate()

  // 영화 데이터
  const popularMovies = useFetchInfiniteMedias({
    type: 'movie',
    category: 'popular'
  })

  const topRatedMovies = useFetchInfiniteMedias({
    type: 'movie',
    category: 'top_rated'
  })

  const nowPlayingMovies = useFetchInfiniteMedias({
    type: 'movie',
    category: 'now_playing'
  })

  const upcomingMovies = useFetchInfiniteMedias({
    type: 'movie',
    category: 'upcoming'
  })

  // TV 시리즈 데이터
  const popularTV = useFetchInfiniteMedias({
    type: 'tv',
    category: 'popular'
  })

  const topRatedTV = useFetchInfiniteMedias({
    type: 'tv',
    category: 'top_rated'
  })

  const onAirTV = useFetchInfiniteMedias({
    type: 'tv',
    category: 'on_the_air'
  })

  const airingTodayTV = useFetchInfiniteMedias({
    type: 'tv',
    category: 'airing_today'
  })

  // 현재 선택된 카테고리의 데이터 가져오기
  const getCurrentData = (
    section:
      | 'popular'
      | 'top_rated'
      | 'now_playing'
      | 'upcoming'
      | 'airing_today'
  ) => {
    if (selectedCategory === 'movie') {
      switch (section) {
        case 'popular':
          return popularMovies
        case 'top_rated':
          return topRatedMovies
        case 'now_playing':
          return nowPlayingMovies
        case 'upcoming':
          return upcomingMovies
        default:
          return popularMovies
      }
    } else {
      switch (section) {
        case 'popular':
          return popularTV
        case 'top_rated':
          return topRatedTV
        case 'now_playing':
          return onAirTV
        case 'airing_today':
          return airingTodayTV
        default:
          return popularTV
      }
    }
  }

  const handleChangeCategory = (category: 'movie' | 'tv') => {
    setSelectedCategory(category)
  }

  const showMoreItems = (category: string) => {
    if (category === 'nowPlaying') {
      setIsFadingNowPlaying(true)
      setTimeout(() => {
        setNowPlayingIndex(nowPlayingIndex + 5)
        setIsFadingNowPlaying(false)
      }, 500)
    } else if (category === 'topRated') {
      setIsFadingTopRated(true)
      setTimeout(() => {
        setTopRatedIndex(topRatedIndex + 5)
        setIsFadingTopRated(false)
      }, 500)
    } else if (category === 'popular') {
      setIsFadingPopular(true)
      setTimeout(() => {
        setPopularIndex(popularIndex + 5)
        setIsFadingPopular(false)
      }, 500)
    } else if (category === 'upcoming') {
      setIsFadingUpcoming(true)
      setTimeout(() => {
        setUpcomingIndex(upcomingIndex + 5)
        setIsFadingUpcoming(false)
      }, 500)
    } else if (category === 'airing_today') {
      setIsFadingAiringToday(true)
      setTimeout(() => {
        setAiringTodayIndex(airingTodayIndex + 5)
        setIsFadingAiringToday(false)
      }, 500)
    }
  }

  const showLessItems = (category: string) => {
    if (category === 'nowPlaying') {
      setIsFadingNowPlaying(true)
      setTimeout(() => {
        setNowPlayingIndex(nowPlayingIndex - 5)
        setIsFadingNowPlaying(false)
      }, 500)
    } else if (category === 'topRated') {
      setIsFadingTopRated(true)
      setTimeout(() => {
        setTopRatedIndex(topRatedIndex - 5)
        setIsFadingTopRated(false)
      }, 500)
    } else if (category === 'popular') {
      setIsFadingPopular(true)
      setTimeout(() => {
        setPopularIndex(popularIndex - 5)
        setIsFadingPopular(false)
      }, 500)
    } else if (category === 'upcoming') {
      setIsFadingUpcoming(true)
      setTimeout(() => {
        setUpcomingIndex(upcomingIndex - 5)
        setIsFadingUpcoming(false)
      }, 500)
    } else if (category === 'airing_today') {
      setIsFadingAiringToday(true)
      setTimeout(() => {
        setAiringTodayIndex(airingTodayIndex - 5)
        setIsFadingAiringToday(false)
      }, 500)
    }
  }

  return (
    <S.HomeMainWrapper>
      <S.HomeMainContainer>
        <S.HomeGapRow>
          <Button
            type="button"
            color="transparent"
            size="medium"
            onClick={() => handleChangeCategory('movie')}
            isActive={selectedCategory === 'movie'}>
            영화
          </Button>
          <Button
            type="button"
            color="transparent"
            size="medium"
            onClick={() => handleChangeCategory('tv')}
            isActive={selectedCategory === 'tv'}>
            드라마
          </Button>
        </S.HomeGapRow>

        <S.HomeTitle>
          {selectedCategory === 'movie' ? 'Now Playing' : 'On Air'}
        </S.HomeTitle>
        <S.HomeRow className={isFadingNowPlaying ? 'fade-out' : ''}>
          {nowPlayingIndex > 0 && (
            <S.FaArrowAltCircleLeft
              onClick={() => showLessItems('nowPlaying')}
            />
          )}
          {getCurrentData('now_playing').data?.pages.map(page =>
            page.results
              .slice(nowPlayingIndex, nowPlayingIndex + 5)
              .map(media => (
                <S.HomeColumn
                  key={media.id}
                  className={isFadingNowPlaying ? 'fade-in' : ''}
                  onClick={() => {
                    navigate(`/media-details/${selectedCategory}/${media.id}`)
                  }}>
                  <S.HomePoster>
                    <img
                      src={`${import.meta.env.VITE_TMDB_IMG_URL}${media.poster_path}`}
                      alt={checkIsMovie(media) ? media.title : media.name}
                    />
                  </S.HomePoster>
                  <S.HomeName>
                    {checkIsMovie(media) ? media.title : media.name}
                  </S.HomeName>
                  <S.HomeRating>
                    평점 ★{media.vote_average.toFixed(1)}
                  </S.HomeRating>
                </S.HomeColumn>
              ))
          )}
          {getCurrentData('now_playing').hasNextPage && (
            <S.FaArrowAltCircleRight
              onClick={() => showMoreItems('nowPlaying')}
            />
          )}
        </S.HomeRow>

        <S.HomeTitle>Top Rated</S.HomeTitle>
        <S.HomeRow className={isFadingTopRated ? 'fade-out' : ''}>
          {topRatedIndex > 0 && (
            <S.FaArrowAltCircleLeft onClick={() => showLessItems('topRated')} />
          )}
          {getCurrentData('top_rated').data?.pages.map(page =>
            page.results.slice(topRatedIndex, topRatedIndex + 5).map(media => (
              <S.HomeColumn
                key={media.id}
                className={isFadingTopRated ? 'fade-in' : ''}
                onClick={() => {
                  navigate(`/media-details/${selectedCategory}/${media.id}`)
                }}>
                <S.HomePoster>
                  <img
                    src={`${import.meta.env.VITE_TMDB_IMG_URL}${media.poster_path}`}
                    alt={checkIsMovie(media) ? media.title : media.name}
                  />
                </S.HomePoster>
                <S.HomeName>
                  {checkIsMovie(media) ? media.title : media.name}
                </S.HomeName>
                <S.HomeRating>
                  평점 {media.vote_average.toFixed(1)}
                </S.HomeRating>
              </S.HomeColumn>
            ))
          )}
          {getCurrentData('top_rated').hasNextPage && (
            <S.FaArrowAltCircleRight
              onClick={() => showMoreItems('topRated')}
            />
          )}
        </S.HomeRow>

        <S.HomeTitle>Popular</S.HomeTitle>
        <S.HomeRow className={isFadingPopular ? 'fade-out' : ''}>
          {popularIndex > 0 && (
            <S.FaArrowAltCircleLeft onClick={() => showLessItems('popular')} />
          )}
          {getCurrentData('popular').data?.pages.map(page =>
            page.results.slice(popularIndex, popularIndex + 5).map(media => (
              <S.HomeColumn
                key={media.id}
                className={isFadingPopular ? 'fade-in' : ''}
                onClick={() => {
                  navigate(`/media-details/${selectedCategory}/${media.id}`)
                }}>
                <S.HomePoster>
                  <img
                    src={`${import.meta.env.VITE_TMDB_IMG_URL}${media.poster_path}`}
                    alt={checkIsMovie(media) ? media.title : media.name}
                  />
                </S.HomePoster>
                <S.HomeName>
                  {checkIsMovie(media) ? media.title : media.name}
                </S.HomeName>
                <S.HomeRating>
                  평점 ★{media.vote_average.toFixed(1)}
                </S.HomeRating>
              </S.HomeColumn>
            ))
          )}
          {getCurrentData('popular').hasNextPage && (
            <S.FaArrowAltCircleRight onClick={() => showMoreItems('popular')} />
          )}
        </S.HomeRow>

        <S.HomeTitle>
          {selectedCategory === 'movie' ? 'Upcoming' : 'Airing Today'}
        </S.HomeTitle>
        <S.HomeRow className={isFadingUpcoming ? 'fade-out' : ''}>
          {selectedCategory === 'movie'
            ? upcomingIndex > 0 && (
                <S.FaArrowAltCircleLeft
                  onClick={() => showLessItems('upcoming')}
                />
              )
            : airingTodayIndex > 0 && (
                <S.FaArrowAltCircleLeft
                  onClick={() => showLessItems('airing_today')}
                />
              )}
          {getCurrentData(
            selectedCategory === 'movie' ? 'upcoming' : 'airing_today'
          ).data?.pages.map(page =>
            page.results
              .slice(
                selectedCategory === 'movie' ? upcomingIndex : airingTodayIndex,
                (selectedCategory === 'movie'
                  ? upcomingIndex
                  : airingTodayIndex) + 5
              )
              .map(media => (
                <S.HomeColumn
                  key={media.id}
                  className={isFadingUpcoming ? 'fade-in' : ''}
                  onClick={() => {
                    navigate(`/media-details/${selectedCategory}/${media.id}`)
                  }}>
                  <S.HomePoster>
                    <img
                      src={`${import.meta.env.VITE_TMDB_IMG_URL}${media.poster_path}`}
                      alt={checkIsMovie(media) ? media.title : media.name}
                    />
                  </S.HomePoster>
                  <S.HomeName>
                    {checkIsMovie(media) ? media.title : media.name}
                  </S.HomeName>
                  <S.HomeRating>
                    평점 ★{media.vote_average.toFixed(1)}
                  </S.HomeRating>
                </S.HomeColumn>
              ))
          )}
          {getCurrentData(
            selectedCategory === 'movie' ? 'upcoming' : 'airing_today'
          ).hasNextPage && (
            <S.FaArrowAltCircleRight
              onClick={() =>
                showMoreItems(
                  selectedCategory === 'movie' ? 'upcoming' : 'airing_today'
                )
              }
            />
          )}
        </S.HomeRow>
      </S.HomeMainContainer>
    </S.HomeMainWrapper>
  )
}

export default HomeMain
