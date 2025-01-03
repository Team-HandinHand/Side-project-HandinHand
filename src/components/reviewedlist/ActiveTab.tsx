import styled from 'styled-components'

interface ActiveTabProps {
  activeTab: '영화' | '시리즈'
  onTabChange: (tab: '영화' | '시리즈') => void
  title: string
}

export const ActiveTab = ({
  activeTab,
  onTabChange,
  title
}: ActiveTabProps) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <Tabs>
        <Tab
          active={activeTab === '영화'}
          onClick={() => onTabChange('영화')}>
          영화
        </Tab>
        <Tab
          active={activeTab === '시리즈'}
          onClick={() => onTabChange('시리즈')}>
          시리즈
        </Tab>
      </Tabs>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  margin-bottom: var(--space-medium);
`

const Title = styled.div`
  font-size: var(--font-large);
  font-weight: bold;
  margin-bottom: var(--space-medium);
`

const Tabs = styled.div`
  display: flex;
  gap: var(--space-small);
`

const Tab = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  color: var(--color-white);
  font-size: var(--font-medium);
  padding-bottom: var(--space-xsmall);
  cursor: pointer;
  border-bottom: ${({ active }) =>
    active ? `2px solid var(--color-pink)` : 'none'};
`
