import { useState } from 'react'
import { MediaList, Tab } from '@/components'
import { MediaContainer } from '@/components/media/Media.styles'
import useAuth from '@/hooks/useAuth'
import useFetchBookmark from '@/hooks/queries/useFetchBookmark'

export const Bookmark = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<'movie' | 'tv'>('movie')
  const username = user?.nickname

  const { data: bookmarks = [], isLoading } = useFetchBookmark(
    user?.userId,
    activeTab
  )
  return (
    <MediaContainer>
      <div>
        <Tab
          title={`${username}의 즐겨찾기 목록`}
          onTabChange={tab => setActiveTab(tab as 'movie' | 'tv')}
        />
        <MediaList
          medias={bookmarks}
          isLoading={isLoading}
        />
      </div>
    </MediaContainer>
  )
}
