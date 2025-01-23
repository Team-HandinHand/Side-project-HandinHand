import { useEffect, useState, useCallback } from 'react'
import { MediaList, Tab } from '@/components'
import { MediaContainer } from '@/components/media/Media.styles'
import useAuth from '@/hooks/useAuth'
import { supabase } from '../../supabaseConfig'
import { MediaResult } from '@/types/media'
import { DramaBookmark, MovieBookmark } from '@/types/bookmark'

export const Bookmark = () => {
  const { user } = useAuth()
  const [medias, setMedias] = useState<MediaResult[]>([])
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'movie' | 'tv'>('movie')
  const username = user?.nickname

  // 영화 데이터를 가져오는 함수
  const fetchMovieBookmarks = useCallback(async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('moviebookmark')
        .select(
          `
          movie_id,
          movieResults (
            id,
            poster_path,
            title,
            release_date
          )
        `
        )
        .eq('user_id', user?.userId)

      if (error) {
        console.error('영화 즐겨찾기 쿼리 에러:', error)
        return
      }

      const formattedMedias = (data as unknown as MovieBookmark[]).map(
        item => ({
          id: String(item.movieResults?.id || ''),
          poster_path: item.movieResults?.poster_path || '',
          title: item.movieResults?.title || '',
          release_date: item.movieResults?.release_date || '',
          media_type: 'movie'
        })
      ) as unknown as MediaResult[]

      setMedias(formattedMedias)
    } catch (error) {
      console.error('영화 즐겨찾기 데이터를 불러오는 중 오류:', error)
    } finally {
      setLoading(false)
    }
  }, [user?.userId])

  // 드라마 데이터를 가져오는 함수
  const fetchTvBookmarks = useCallback(async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('dramabookmark')
        .select(
          `
          drama_id,
          dramaResults (
            id,
            poster_path,
            name,
            first_air_date
          )
        `
        )
        .eq('user_id', user?.userId)

      console.log('data:', data)

      if (error) {
        console.error('드라마 즐겨찾기 쿼리 에러:', error)
        return
      }

      const formattedMedias = (data as unknown as DramaBookmark[]).map(
        item => ({
          id: String(item.dramaResults?.id || ''),
          poster_path: item.dramaResults?.poster_path || '',
          title: item.dramaResults?.name || '',
          release_date: item.dramaResults?.first_air_date || '',
          media_type: 'tv'
        })
      ) as unknown as MediaResult[]

      console.log('formattedMedias:', formattedMedias)
      setMedias(formattedMedias)
    } catch (error) {
      console.error('드라마 즐겨찾기 데이터를 불러오는 중 오류:', error)
    } finally {
      setLoading(false)
    }
  }, [user?.userId])

  useEffect(() => {
    if (activeTab === 'movie') {
      fetchMovieBookmarks()
    } else {
      fetchTvBookmarks()
    }
  }, [activeTab, fetchMovieBookmarks, fetchTvBookmarks])

  return (
    <MediaContainer>
      <div>
        <Tab
          title={`${username}의 즐겨찾기 목록`}
          onTabChange={tab => setActiveTab(tab as 'movie' | 'tv')}
        />
        <MediaList
          medias={medias}
          isLoading={loading}
        />
      </div>
    </MediaContainer>
  )
}
