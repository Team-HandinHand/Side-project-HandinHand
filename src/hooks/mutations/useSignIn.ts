import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { UseFormSetError } from 'react-hook-form'
import { supabase } from '../../../supabaseConfig'
import { TSignInFormValues } from '@/schemas/user/signInSchema'
import { queryClient } from '../../App'
import { isApiError } from '@/utils/isApiError'
import { useErrorHandler } from '@/hooks/useErrorHandler'

export const useSignIn = (setError: UseFormSetError<TSignInFormValues>) => {
  const navigate = useNavigate()
  const handleError = useErrorHandler()

  const { mutateAsync: signIn, isPending } = useMutation({
    mutationFn: async ({ email, password }: TSignInFormValues) => {
      // Supabase 로그인
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      return data // 성공시 데이터 반환
    },

    onSuccess: data => {
      console.log('로그인 성공:', data)
      queryClient.invalidateQueries({ queryKey: ['fetchUser'] }) // 로그인 후 사용자 정보를 다시 가져옴
      // 성공 시 홈으로 이동
      navigate('/')
    },
    onError: error => {
      if (isApiError(error) && error.status >= 400 && error.status < 500) {
        // 400번재 에러는 폼에 에러 메시지 표시
        setError('password', {
          message: '이메일과 비밀번호를 다시 확인해주세요'
        })
        return
      }
      handleError('로그인', error)
    }
  })

  return { signIn, isPending }
}
