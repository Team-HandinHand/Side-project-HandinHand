import { ActiveTab } from '@/components'
import { useState } from 'react'
import { useUserStore } from '@/stores/userStore'
// import { MediaList } from '@/components'
import { MediaContainer } from '@/components/media/Media.styles'
import { ActiveTabWrapper } from '@/components/bookmark/Bookmark.styles'

export const Bookmark = () => {
  const [activeTab, setActiveTab] = useState<'영화' | '시리즈'>('영화')
  const { user } = useUserStore()
  const username = user?.nickname
  return (
    <MediaContainer>
      <ActiveTabWrapper>
        <ActiveTab
          title={`${username}의 즐겨찾기 목록`}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </ActiveTabWrapper>
      {/* <MediaList movies={movies} isLoading={false}/> */}
    </MediaContainer>
  )
}
