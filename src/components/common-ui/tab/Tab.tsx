import * as S from './Tab.styles'
import { useNavigate, useLocation } from 'react-router-dom'
import { useQueryState } from 'nuqs'
import { TABS } from '@/constants/commonUi'

export const Tab = ({ title }: { title?: string }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useQueryState('type', {
    defaultValue: 'movie'
  })
  const [search] = useQueryState('search')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    // 현재 경로가 media-search일 때만 라우팅 업데이트
    if (location.pathname.includes('media-search')) {
      navigate(
        `/media-search${search ? `?type=${value}&search=${search}` : `?type=${value}`}`
      )
    }
  }

  return (
    <S.TabContainer>
      <S.Title>{title}</S.Title>
      {Object.entries(TABS).map(([label, value]) => (
        <S.Tab
          key={value}
          $isActive={activeTab === value}
          onClick={() => handleTabChange(value)}>
          {label}
        </S.Tab>
      ))}
    </S.TabContainer>
  )
}

/** 사용 예시
 *  <Tab title={`${username}의 평가 목록`} />
 */
