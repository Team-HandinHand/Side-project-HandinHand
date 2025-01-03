import * as S from './header.styles'
import { useLocation } from 'react-router-dom'
import { HeaderProps } from '@/types/commonUi'
import { Button, Profile } from '@/components'
import { useSignOut } from '@/hooks/mutations/useSignOut'
import { useUserStore } from '@/stores/userStore'

export const Header = ({ $backgroundColor }: HeaderProps) => {
  const { signOut, isPending } = useSignOut()
  const { user } = useUserStore()
  const { pathname } = useLocation()

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
            $active={pathname === '/'}>
            홈
          </S.Li>
        </S.RestrictedLink>
        <S.RestrictedLink
          $signedUp={!!user}
          to="/movies">
          <S.Li
            $signedUp={!!user}
            $active={pathname.startsWith('/movies')}>
            영화
          </S.Li>
        </S.RestrictedLink>
        <S.RestrictedLink
          $signedUp={!!user}
          to="/series">
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
            <S.BaseLink to="/">
              {/* 즐겨찾기 */}
              <S.FavoriteIcon $active={pathname === '/'} />
            </S.BaseLink>
            <S.BaseLink to="/">
              {/* 보관함 */}
              <S.StorageIcon $active={pathname === '/'} />
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
