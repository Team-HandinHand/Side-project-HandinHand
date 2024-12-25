import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../supabaseConfig'
import {
  TEditProfileFormValues,
  TEditProfileRequestValues
} from '@/schemas/user/editProfileSchema'
import { queryClient } from '../../App'
import { useErrorHandler } from '@/hooks/useErrorHandler'

export const useEditProfile = () => {
  const navigate = useNavigate()
  const handleError = useErrorHandler()

  const { mutateAsync: editProfile, isPending } = useMutation({
    mutationFn: async (formData: TEditProfileFormValues) => {
      const updateData: TEditProfileRequestValues = {
        data: {
          nickname: formData.nickname,
          profile_picture_path: formData.profilePicturePath
        }
      }

      // password를 바꿀 때만 요청에 추가
      if (formData.password) updateData.password = formData.password

      // Supabase 프로필 수정
      const { data, error } = await supabase.auth.updateUser(updateData)

      if (error) {
        throw error
      }

      return data // 성공시 데이터 반환
    },
    onSuccess: data => {
      console.log('프로필 수정 성공:', data)
      queryClient.invalidateQueries({ queryKey: ['fetchUser'] }) // 프로필 수정 후 사용자 정보를 다시 가져옴
      navigate(-1) // 성공시 이전 페이지로 이동
    },
    onError: error => handleError('프로필 수정', error)
  })

  return { editProfile, isPending }
}
