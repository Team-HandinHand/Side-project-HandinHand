import { useState } from 'react'
import * as S from './HomeMain.styles'
import useFetchInfiniteMedias from '@/hooks/queries/useFetchInfiniteMedias'
import { useNavigate } from 'react-router-dom'
import checkIsMovie from '@/utils/checkIsMovie'
import { MediaResult, MediaType } from '@/types/media'
import { motion } from 'framer-motion'

import { useQueryState } from 'nuqs'
import { Tab } from '@/components'

const parseMediaType = (value: string): MediaType => {
  if (value === 'movie' || value === 'tv') {
    return value
  }
  return 'movie'
}
export const HomeMain = () => {
  const [nowPlayingMovieIndex, setNowPlayingMovieIndex] = useState(0)
  const [nowPlayingTVIndex, setNowPlayingTVIndex] = useState(0)
  const [popularIndex, setPopularIndex] = useState(0)
  const [topRatedIndex, setTopRatedIndex] = useState(0)
  const [upcomingIndex, setUpcomingIndex] = useState(0)
  const [airingTodayIndex, setAiringTodayIndex] = useState(0)
  const [isFadingNowPlaying, setIsFadingNowPlaying] = useState(false)
  const [isFadingTopRated, setIsFadingTopRated] = useState(false)
  const [isFadingPopular, setIsFadingPopular] = useState(false)
  const [isFadingUpcoming, setIsFadingUpcoming] = useState(false)
  const [, setIsFadingAiringToday] = useState(false)
  const navigate = useNavigate()

  // console.log(isFadingAiringToday)

  const [activeType] = useQueryState<MediaType>('type', {
    parse: parseMediaType,
    defaultValue: 'movie'
  })

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

  const getCurrentData = (
    section:
      | 'popular'
      | 'top_rated'
      | 'now_playing'
      | 'upcoming'
      | 'airing_today'
  ) => {
    if (activeType === 'movie') {
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

  const handleResetIndex = () => {
    setNowPlayingMovieIndex(0)
    setNowPlayingTVIndex(0)
    setTopRatedIndex(0)
    setPopularIndex(0)
    setUpcomingIndex(0)
    setAiringTodayIndex(0)
  }

  const showMoreItems = (category: string) => {
    if (category === 'nowPlaying') {
      if (activeType === 'movie') {
        if (nowPlayingMovieIndex % 15 === 0 && nowPlayingMovieIndex > 0) {
          nowPlayingMovies.fetchNextPage().catch(error => {
            console.error('Error fetching now playing items:', error)
          })
        }
        setIsFadingNowPlaying(true)
        setTimeout(() => {
          setNowPlayingMovieIndex(nowPlayingMovieIndex + 5)
          setIsFadingNowPlaying(false)
        }, 500)
      } else {
        if (nowPlayingTVIndex % 15 === 0 && nowPlayingTVIndex > 0) {
          onAirTV.fetchNextPage().catch(error => {
            console.error('Error fetching now playing items:', error)
          })
        }
        setIsFadingNowPlaying(true)
        setTimeout(() => {
          setNowPlayingTVIndex(nowPlayingTVIndex + 5)
          setIsFadingNowPlaying(false)
        }, 500)
      }
    } else if (category === 'topRated') {
      if (topRatedIndex % 15 === 0 && topRatedIndex > 0) {
        const query = activeType === 'movie' ? topRatedMovies : topRatedTV
        query.fetchNextPage().catch(error => {
          console.error('Error fetching top rated items:', error)
        })
      }
      setIsFadingTopRated(true)
      setTimeout(() => {
        setTopRatedIndex(topRatedIndex + 5)
        setIsFadingTopRated(false)
      }, 500)
    } else if (category === 'popular') {
      if (popularIndex % 15 === 0 && popularIndex > 0) {
        const query = activeType === 'movie' ? popularMovies : popularTV
        query.fetchNextPage().catch(error => {
          console.error('Error fetching popular items:', error)
        })
      }
      setIsFadingPopular(true)
      setTimeout(() => {
        setPopularIndex(popularIndex + 5)
        setIsFadingPopular(false)
      }, 500)
    } else if (category === 'upcoming') {
      if (upcomingIndex % 15 === 0 && upcomingIndex >= 0) {
        upcomingMovies.fetchNextPage().catch(error => {
          console.error('Error fetching upcoming movies:', error)
        })
      }
      setIsFadingUpcoming(true)
      setTimeout(() => {
        setUpcomingIndex(upcomingIndex + 5)
        setIsFadingUpcoming(false)
      }, 500)
    } else if (category === 'airing_today') {
      if (airingTodayIndex % 15 === 0 && airingTodayIndex > 0) {
        airingTodayTV.fetchNextPage().catch(error => {
          console.error('Error fetching airing today items:', error)
        })
      }
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
        if (activeType === 'movie') {
          setNowPlayingMovieIndex(nowPlayingMovieIndex - 5)
        } else {
          setNowPlayingTVIndex(nowPlayingTVIndex - 5)
        }
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
          <div onClick={() => handleResetIndex()}>
            <Tab />
          </div>
        </S.HomeGapRow>

        <S.HomeTitle>
          {activeType === 'movie' ? 'Now Playing' : 'On Air'}
        </S.HomeTitle>
        <S.HomeRow className={isFadingNowPlaying ? 'fade-out' : ''}>
          {(activeType === 'movie' ? nowPlayingMovieIndex : nowPlayingTVIndex) >
            0 && (
            <S.FaArrowAltCircleLeft
              onClick={() => showLessItems('nowPlaying')}
            />
          )}
          {getCurrentData('now_playing')
            .data?.pages.flatMap(
              (page: { results: MediaResult[] }) => page.results
            )
            .slice(
              activeType === 'movie' ? nowPlayingMovieIndex : nowPlayingTVIndex,
              (activeType === 'movie'
                ? nowPlayingMovieIndex
                : nowPlayingTVIndex) + 5
            )
            .map((media: MediaResult) => (
              <S.HomeColumn
                key={media.id}
                onClick={() => {
                  navigate(`/media-details/${activeType}/${media.id}`)
                }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isFadingNowPlaying ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.5 }}>
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
                    평점 ★{media?.vote_average?.toFixed(1)}
                  </S.HomeRating>
                </motion.div>
              </S.HomeColumn>
            ))}
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
          {getCurrentData('top_rated')
            .data?.pages.flatMap(
              (page: { results: MediaResult[] }) => page.results
            )
            .slice(topRatedIndex, topRatedIndex + 5)
            .map((media: MediaResult) => (
              <S.HomeColumn
                key={media.id}
                onClick={() => {
                  navigate(`/media-details/${activeType}/${media.id}`)
                }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isFadingTopRated ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.5 }}>
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
                    평점 ★{media?.vote_average?.toFixed(1)}
                  </S.HomeRating>
                </motion.div>
              </S.HomeColumn>
            ))}
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
          {getCurrentData('popular')
            .data?.pages.flatMap(
              (page: { results: MediaResult[] }) => page.results
            )
            .slice(popularIndex, popularIndex + 5)
            .map((media: MediaResult) => (
              <S.HomeColumn
                key={media.id}
                onClick={() => {
                  navigate(`/media-details/${activeType}/${media.id}`)
                }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isFadingPopular ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.5 }}>
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
                    평점 ★{media?.vote_average?.toFixed(1)}
                  </S.HomeRating>
                </motion.div>
              </S.HomeColumn>
            ))}
          {getCurrentData('popular').hasNextPage && (
            <S.FaArrowAltCircleRight onClick={() => showMoreItems('popular')} />
          )}
        </S.HomeRow>

        <S.HomeTitle>
          {activeType === 'movie' ? 'Upcoming' : 'Airing Today'}
        </S.HomeTitle>
        <S.HomeRow className={isFadingUpcoming ? 'fade-out' : ''}>
          {activeType === 'movie'
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
          {getCurrentData(activeType === 'movie' ? 'upcoming' : 'airing_today')
            .data?.pages.flatMap(
              (page: { results: MediaResult[] }) => page.results
            )
            .slice(
              activeType === 'movie' ? upcomingIndex : airingTodayIndex,
              (activeType === 'movie' ? upcomingIndex : airingTodayIndex) + 5
            )
            .map((media: MediaResult) => (
              <S.HomeColumn
                key={media.id}
                onClick={() => {
                  navigate(`/media-details/${activeType}/${media.id}`)
                }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isFadingUpcoming ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.5 }}>
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
                    평점 ★{media?.vote_average?.toFixed(1)}
                  </S.HomeRating>
                </motion.div>
              </S.HomeColumn>
            ))}
          {getCurrentData(
            activeType === 'movie' ? 'upcoming' : 'airing_today'
          ) && (
            <S.FaArrowAltCircleRight
              onClick={() =>
                showMoreItems(
                  activeType === 'movie' ? 'upcoming' : 'airing_today'
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
