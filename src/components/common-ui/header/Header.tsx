import * as S from './header.styles'
import { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useQueryState } from 'nuqs'
import { HeaderProps } from '@/types/commonUi'
import { Button, Profile } from '@/components'
import { useSignOut } from '@/hooks/mutations/useSignOut'
import { useUserStore } from '@/stores/userStore'

export const Header = ({ $backgroundColor }: HeaderProps) => {
  const { signOut, isPending } = useSignOut()
  const { user } = useUserStore()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // 검색 관련
  const [query, setQuery] = useQueryState('search', {
    defaultValue: ''
  })
  const [type] = useQueryState('type', {
    defaultValue: 'movie'
  })
  const [inputValue, setInputValue] = useState(query ?? '')
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value) //input은 즉시 업데이트

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }

    debounceTimer.current = setTimeout(() => {
      setQuery(value) // 쿼리 업데이트

      if (value) {
        // 검색어가 있을 때만 media-search로 이동
        navigate(`/media-search?type=${type}&search=${value}`)
      } else if (pathname.includes('media-search')) {
        // 검색어가 없고 현재 media-search 페이지에 있을 때는 홈으로 이동
        navigate('/')
      }
    }, 300)
  }

  const handleNavigate = (path: string) => {
    setInputValue('') // 검색 창 내용 없앰

    // 쿼리 파라미터 초기화
    setQuery('') // search 쿼리 파라미터 제거
    // type 쿼리 파라미터 제거
    const params = new URLSearchParams(window.location.search)
    params.delete('type')

    // 쿼리 없이 순수 경로로 이동
    navigate(`${path}${params.toString() ? `?${params.toString()}` : ''}`)
  }

  return (
    <S.HeaderContainer $backgroundColor={$backgroundColor}>
      <S.LogoWrapper>
        <S.RestrictedLink to="/">
          <S.Logo src="/assets/img/logo/logo.webp" />
        </S.RestrictedLink>
      </S.LogoWrapper>

      <S.NavUL>
        <S.RestrictedLink
          $signedUp={!!user}
          to="/"
          onClick={e => {
            e.preventDefault()
            handleNavigate('/')
          }}>
          <S.Li
            $signedUp={!!user}
            $active={pathname === '/'}>
            홈
          </S.Li>
        </S.RestrictedLink>
        <S.RestrictedLink
          $signedUp={!!user}
          to="/movies"
          onClick={e => {
            e.preventDefault()
            handleNavigate('/movies')
          }}>
          <S.Li
            $signedUp={!!user}
            $active={pathname.startsWith('/movies')}>
            영화
          </S.Li>
        </S.RestrictedLink>
        <S.RestrictedLink
          $signedUp={!!user}
          to="/series"
          onClick={e => {
            e.preventDefault()
            handleNavigate('/series')
          }}>
          <S.Li
            $signedUp={!!user}
            $active={pathname.startsWith('/series')}>
            드라마
          </S.Li>
        </S.RestrictedLink>
      </S.NavUL>

      <S.AuthContainer>
        {!user ? (
          <>
            <S.BaseLink to="/signin">
              <Button
                type="button"
                color="transparent"
                size="small">
                로그인
              </Button>
            </S.BaseLink>
            <S.BaseLink to="/signup">
              <Button
                type="button"
                color="transparent"
                size="small">
                회원가입
              </Button>
            </S.BaseLink>
          </>
        ) : (
          <>
            <S.SearchWrapper>
              <S.SearchInput
                id="search-input"
                value={inputValue}
                onChange={handleChange}
                placeholder="콘텐츠를 검색해보세요  🔍"
                autoComplete="off"
              />
            </S.SearchWrapper>
            <S.BaseLink to="/bookmark">
              <S.FavoriteIcon $active={pathname === '/bookmark'} />
            </S.BaseLink>
            <S.BaseLink to="/reviewedlist">
              <S.StorageIcon $active={pathname === '/reviewedlist'} />
            </S.BaseLink>
            <S.BaseLink to="/edit-profile">
              <Profile
                imageUrl={user?.profilePicturePath}
                size="small"
              />
            </S.BaseLink>
            <S.UserNickname>{user?.nickname}</S.UserNickname>
            <Button
              type="button"
              color="transparent"
              size="small"
              onClick={() => signOut()}
              disabled={isPending}>
              {isPending ? '로그아웃 중...' : '로그아웃'}
            </Button>
          </>
        )}
      </S.AuthContainer>
    </S.HeaderContainer>
  )
}
