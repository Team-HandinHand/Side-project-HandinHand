import * as S from './header.styled'
// import { useSignOut } from '@/hooks/mutations/useSignOut'
// import { useUserStore } from '@/stores/userStore'

interface Container {
  backgroundColor: string
}

export function Header({ backgroundColor }: Container) {
  // const { signOut, isPending } = useSignOut()
  // const { user } = useUserStore()

  return (
    <S.Header backgroundColor={backgroundColor}>
      <S.Container>
        <S.Logo>로고</S.Logo>

        <S.NavUl>
          <S.Link to="/">
            <S.Li>홈</S.Li>
          </S.Link>
          <S.Link to="/movies">
            <S.Li>영화</S.Li>
          </S.Link>
          <S.Link to="/series">
            <S.Li>드라마</S.Li>
          </S.Link>
          {/* NavLink 필요시 타 컴포넌트로 대체 가능 */}
        </S.NavUl>
      </S.Container>
    </S.Header>
  )
}

//  <header>
//    <nav>
//      <a href="/">Home</a>
//      <a href="/movies">Movies</a>
//      <a href="/series">Series</a>
//      {!user && <a href="/signin">로그인</a>}
//      {!user && <a href="/signup">회원가입</a>}
//      {user && (
//        <a href="/edit-profile">
//          <S.ProfileImg src={user?.profilePicturePath}></S.ProfileImg>
//        </a>
//      )}
//      {user && (
//        <button
//          onClick={() => signOut()}
//          disabled={isPending}>
//          {isPending ? '로그아웃 중...' : '로그아웃'}
//        </button>
//      )}
//    </nav>
//  </header>
