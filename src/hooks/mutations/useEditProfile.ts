import { useMutation } from '@tanstack/react-query'
import { UseFormSetError } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../supabaseConfig'
import {
  TEditProfileFormValues,
  TEditProfileRequestValues
} from '@/schemas/user/editProfileSchema'
import { useErrorHandler } from '@/hooks/useErrorHandler'
import { isApiError } from '@/utils/isApiError'
import toast from 'react-hot-toast'

export const useEditProfile = (
  setError: UseFormSetError<TEditProfileFormValues>
) => {
  const handleError = useErrorHandler()
  const navigate = useNavigate()

  const { mutateAsync: editProfile, isPending } = useMutation<
    void,
    Error,
    TEditProfileFormValues
  >({
    mutationFn: async ({
      nickname,
      password,
      profilePicturePath
    }: TEditProfileFormValues) => {
      const updateData: TEditProfileRequestValues = {
        data: {}
      }

      // 데이터를 바꿀 때만 요청에 추가
      if (nickname) updateData.data.nickname = nickname
      if (profilePicturePath)
        updateData.data.profile_picture_path = profilePicturePath
      if (password) updateData.password = password

      // console.log('updateData', updateData)

      // Supabase 프로필 수정
      const { error } = await supabase.auth.updateUser(updateData)

      if (error) throw error
    },
    onSuccess: () => {
      toast.success('프로필 수정이 완료되었어요')
      navigate('/')
    },
    onError: error => {
      if (isApiError(error) && error.status === 422) {
        // 폼에 에러 메시지 표시
        setError('password', {
          message: ''
        })
        setError('confirmPassword', {
          message: '이전 비밀번호와 다른 비밀번호를 입력해주세요'
        })
        return
      }
      handleError('프로필 수정', error)
    }
  })

  return { editProfile, isPending }
}
