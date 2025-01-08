import * as S from './Tab.styles'
import { useNavigate, useLocation } from 'react-router-dom'
import { useQueryState } from 'nuqs'
import { TABS } from '@/constants/commonUi'

export const Tab = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useQueryState('type', {
    defaultValue: 'popular'
  })
  const [search] = useQueryState('search')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    // 현재 경로가 media-search일 때만 라우팅 업데이트
    if (location.pathname.includes('media-search')) {
      console.log(value)
      navigate(
        `/media-search${search ? `?type=${value}&search=${search}` : `?type=${value}`}`
      )
    }
  }

  return (
    <S.Tabs>
      {Object.entries(TABS).map(([label, value]) => (
        <S.Tab
          key={value}
          $isActive={activeTab === value}
          onClick={() => handleTabChange(value)}>
          {label}
        </S.Tab>
      ))}
    </S.Tabs>
  )
}
