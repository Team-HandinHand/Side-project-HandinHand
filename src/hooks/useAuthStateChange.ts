import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseConfig'
import { useUserStore } from '@/stores/userStore'
import { queryClient } from '../App'
import { User } from '@/types/user'

export const useAuthStateChange = () => {
  const navigate = useNavigate()
  const { setUser, clearUser } = useUserStore()

  useEffect(() => {
    // 초기 세션 체크
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.user_metadata) {
        const user: User = {
          email: session.user.user_metadata.email,
          nickname: session.user.user_metadata.nickname,
          profilePicturePath: session.user.user_metadata.profile_picture_path
        }
        setUser(user)
      }
    })

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case 'SIGNED_IN':
          if (session?.user?.user_metadata) {
            const user: User = {
              email: session.user.user_metadata.email,
              nickname: session.user.user_metadata.nickname,
              profilePicturePath:
                session.user.user_metadata.profile_picture_path
            }
            setTimeout(() => {
              setUser(user)
              queryClient.invalidateQueries() // 일단 모든 쿼리 무효화, 다른 쿼리 추가시 쿼리키 넣기!!
              navigate('/')
            }, 0)
          }
          break

        case 'SIGNED_OUT':
          setTimeout(() => {
            clearUser()
            queryClient.clear()
            navigate('/signin')
          }, 0)
          break

        case 'TOKEN_REFRESHED':
          if (!session) {
            // 세션 만료시 로그아웃 처리
            setTimeout(() => {
              clearUser()
              queryClient.clear()
              navigate('/signin')
            }, 0)
          }
          break

        case 'USER_UPDATED':
          if (session?.user?.user_metadata) {
            const user: User = {
              email: session.user.user_metadata.email,
              nickname: session.user.user_metadata.nickname,
              profilePicturePath:
                session.user.user_metadata.profile_picture_path
            }
            setTimeout(() => {
              setUser(user)
              queryClient.invalidateQueries() // 일단 모든 쿼리 무효화, 다른 쿼리 추가시 쿼리키 넣기!!
              navigate(-1) // 이전 페이지로 이동
            }, 0)
          }
          break

        case 'PASSWORD_RECOVERY':
          // 비밀번호 복구
          break
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])
}
