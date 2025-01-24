import { useEffect, useState } from 'react'
import { Back, MediaList, Tab } from '@/components'
import { MediaContainer } from '@/components/media/Media.styles'
import useAuth from '@/hooks/useAuth'
import { useParams } from 'react-router-dom'
import { fetchMovieBookmarks } from '@/service/bookmark/fetchMovieBookmark'
import { fetchDramaBookmarks } from '@/service/bookmark/fetchDramaBookmark'
import { MediaResult } from '@/types/media'

export const Bookmark = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<'movie' | 'tv'>('movie')
  const { userId } = useParams()
  const isMyList = user?.userId === userId

  const [bookmarks, setBookmarks] = useState<MediaResult[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!userId) return

    const fetchBookmarksData = async () => {
      setIsLoading(true)
      try {
        let fetchedBookmarks: MediaResult[] = []
        if (activeTab === 'movie') {
          fetchedBookmarks = await fetchMovieBookmarks(userId)
        } else {
          fetchedBookmarks = await fetchDramaBookmarks(userId)
        }
        setBookmarks(fetchedBookmarks)
      } catch (error) {
        console.error('Error fetching bookmarks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBookmarksData()
  }, [userId, activeTab])

  return (
    <>
      {!isMyList && <Back />}
      <MediaContainer isMyList={isMyList}>
        <div>
          <Tab
            title={
              isMyList
                ? `${user?.nickname}의 즐겨찾기 목록`
                : `${userId} 님의 즐겨찾기 목록`
            }
            onTabChange={tab => setActiveTab(tab as 'movie' | 'tv')}
          />
          <MediaList
            medias={bookmarks} // medias는 MediaResult[] 타입입니다.
            isLoading={isLoading}
          />
        </div>
      </MediaContainer>
    </>
  )
}
