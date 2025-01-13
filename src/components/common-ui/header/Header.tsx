import * as S from './header.styles'
import { useLocation } from 'react-router-dom'
import { HeaderProps } from '@/types/commonUi'
import { Button, Profile } from '@/components'
import { memo, useMemo } from 'react'
import { useSignOut } from '@/hooks/mutations/useSignOut'
import useAuthStateChange from '@/hooks/useAuthStateChange'

export const Header = memo(({ $backgroundColor }: HeaderProps) => {
  const { signOut, isPending } = useSignOut()
  const { pathname } = useLocation()
  const { user } = useAuthStateChange()

  // console.log('user', user)

  const isHomeActive = useMemo(() => pathname === '/', [pathname])
  const isMoviesActive = useMemo(
    () => pathname.startsWith('/movies'),
    [pathname]
  )
  const isSeriesActive = useMemo(
    () => pathname.startsWith('/series'),
    [pathname]
  )

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
          to="/">
          <S.Li
            $signedUp={!!user}
            $active={isHomeActive}>
            홈
          </S.Li>
        </S.RestrictedLink>
        <S.RestrictedLink
          $signedUp={!!user}
          to="/movies">
          <S.Li
            $signedUp={!!user}
            $active={isMoviesActive}>
            영화
          </S.Li>
        </S.RestrictedLink>
        <S.RestrictedLink
          $signedUp={!!user}
          to="/series">
          <S.Li
            $signedUp={!!user}
            $active={isSeriesActive}>
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
            <S.BaseLink to="/bookmark">
              <S.FavoriteIcon $active={pathname === '/bookmark'} />
            </S.BaseLink>
            <S.BaseLink to="/reviewedlist">
              <S.StorageIcon $active={pathname === '/reviewedlist'} />
            </S.BaseLink>
            <S.BaseLink to="/edit-profile">
              <Profile
                // imageUrl={session?.user?.user_metadata?.avatar_url}
                imageUrl={user?.profilePicturePath}
                size="small"
              />
            </S.BaseLink>
            <S.UserNickname>
              {/* {session?.user?.user_metadata?.name} */}
              {user?.nickname}
            </S.UserNickname>
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
})
