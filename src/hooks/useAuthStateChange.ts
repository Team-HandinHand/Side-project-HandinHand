import { useEffect, useState, useCallback } from 'react'
import { supabase } from '../../supabaseConfig'
import queryClient from '@/lib/queryClient'
import { Session } from '@supabase/supabase-js'
import { SupabaseUserData } from '@/types/auth'
import fetchUserProfile from '@/service/auth/fetchUserProfile'
import useUserStore from '@/stores/useUserStore'

const useAuthStateChange = () => {
  const [session, setSession] = useState<Session | null>(null)
  const { user, setUser, clearUser } = useUserStore()

  const updateUser = useCallback(
    async (session: Session | null) => {
      if (!session) {
        clearUser()
        return
      }

      try {
        const userData: SupabaseUserData = await queryClient.fetchQuery({
          queryKey: ['userProfile', session.user.id],
          queryFn: () => fetchUserProfile(session.user.id)
        })
        if ('error' in userData) throw userData.error
        const userInfo = {
          userId: session.user.id,
          email: session.user.email ?? '',
          nickname: userData.nickname ?? '',
          profilePicturePath: userData.profile_picture_path ?? ''
        }
        setUser(userInfo)
      } catch (error) {
        console.error('Failed to update user:', error)
      }
    },
    [setUser, clearUser]
  )

  const handleAuthChange = useCallback(
    async (event: string, currSession: Session | null) => {
      console.log('Event type:', event)
      setSession(() => currSession)
      switch (event) {
        case 'INITIAL_SESSION':
        case 'SIGNED_IN':
        case 'TOKEN_REFRESHED':
        case 'USER_UPDATED': {
          // 프로필 데이터 새로 가져오기
          if (!currSession?.user) return
          updateUser(currSession)
          break
        }

        case 'SIGNED_OUT': {
          updateUser(null)
          queryClient.clear()
          break
        }
      }
    },
    [updateUser]
  )

  useEffect(() => {
    // 로컬 스토리지에서 세션 복원
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session)
      if (session?.user) {
        updateUser(session)
      }
    })

    // 세션 변경 구독
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(handleAuthChange)

    return () => subscription.unsubscribe()
  }, [handleAuthChange, updateUser])

  return { session, user }
}

export default useAuthStateChange
