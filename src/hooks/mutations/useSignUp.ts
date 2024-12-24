import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../supabaseConfig'
import { TAllUserFormValues } from '@/schemas/user/allUserInfoSchema'
import { queryClient } from '../../App'

export const useSignUp = () => {
  const navigate = useNavigate()

  const { mutateAsync: signUp, isPending } = useMutation({
    mutationFn: async (formData: TAllUserFormValues) => {
      try {
        // Supabase 회원가입
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              nickname: formData.nickname,
              profile_picture_path: formData.profilePicturePath
            }
          }
        })

        if (error) {
          console.error('회원가입 에러:', error)
          throw error // ErrorBoundary로 에러 던짐
        }

        return data // 성공시 데이터 반환
      } catch (error) {
        console.error('회원가입 에러:', error)
        throw error
      }
    },
    onSuccess: data => {
      console.log('회원가입 성공:', data)
      queryClient.invalidateQueries({ queryKey: ['fetchUser'] }) // 회원가입 후 사용자 정보를 다시 가져옴
      // 성공 시 홈으로 이동
      navigate('/')
    },
    onError: error => {
      if (error instanceof Error) {
        console.error('회원가입 에러:', error)
      }
    }
  })

  return { signUp, isPending }
}
