import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../supabaseConfig'
import { TSignUpFormValues } from '@/schemas/user/signUpSchema'
import { queryClient } from '../../App'
import { DEFAULT_PROFILE_PATH } from '@/constants/user'
import { useErrorHandler } from '@/hooks/useErrorHandler'

export const useSignUp = () => {
  const navigate = useNavigate()
  const handleError = useErrorHandler()

  const { mutateAsync: signUp, isPending } = useMutation({
    mutationFn: async ({ email, password, nickname }: TSignUpFormValues) => {
      // Supabase 회원가입
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nickname,
            profile_picture_path: DEFAULT_PROFILE_PATH
          }
        }
      })

      if (error) throw error // onError에서 처리

      return data // 성공시 데이터 반환
    },
    onSuccess: data => {
      console.log('회원가입 성공:', data)
      queryClient.invalidateQueries({ queryKey: ['fetchUser'] }) // 회원가입 후 사용자 정보를 다시 가져옴
      // 성공 시 홈으로 이동
      navigate('/')
    },
    onError: error => handleError('회원가입', error)
  })

  return { signUp, isPending }
}
