import * as S from './EditProfileForm.styles'
import { useRef, useState, useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import {
  editProfileSchema,
  TEditProfileFormValues
} from '@/schemas/user/editProfileSchema'
import { useCheckDuplicate } from '@/hooks/queries/useCheckDuplicate'
import { useEditProfile } from '@/hooks/mutations/useEditProfile'
import { useDeactivateAccount } from '@/hooks/mutations/usedeactivateAccount'
import { useUserStore } from '@/stores/userStore'

export const EditProfileForm = () => {
  const { user } = useUserStore()
  const { editProfile, isPending: isEditProfilePending } = useEditProfile()
  const { deactivateAccount, isPending: isDeactivateAccountPending } =
    useDeactivateAccount()

  // 사집 업로드
  const imgRef = useRef<HTMLInputElement>(null)
  const [imgPreview, setImgPreview] = useState<string>(
    user?.profilePicturePath ?? ''
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
    setError,
    reset,
    watch // 디버깅용
  } = useForm<TEditProfileFormValues>({
    resolver: zodResolver(editProfileSchema),
    mode: 'onChange',
    defaultValues: {
      nickname: user?.nickname,
      password: '',
      confirmPassword: '',
      profilePicturePath: user?.profilePicturePath
    }
  })

  // 이미지 변경 반영
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImgPreview(reader.result as string)
        setValue('profilePicturePath', reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // 닉네임 중복 체크
  const { checkDuplicate: checkNickname } = useCheckDuplicate(
    'nickname',
    watch('nickname') ?? ''
  )

  const checkDuplicateNickname = useCallback(async () => {
    const result = await checkNickname()
    if (result.data) {
      setError('nickname', {
        message: '이미 사용 중인 닉네임입니다'
      })
    }
  }, [checkNickname, setError])

  // 폼 제출 핸들러
  const onSubmit: SubmitHandler<TEditProfileFormValues> = async formData => {
    const mergedData = {
      ...user,
      ...formData
    }

    // 병합된 데이터를 서버로 전송
    await editProfile(mergedData)
  }

  // 변경 사항 유무 추적
  const formData = watch()
  const isFormChanged =
    JSON.stringify(formData) !==
    JSON.stringify({
      nickname: user?.nickname,
      password: '',
      confirmPassword: '',
      profilePicturePath: user?.profilePicturePath
    })

  // 변경 사항 되돌리기
  const handleCancel = () => {
    reset({
      nickname: user?.nickname,
      password: '',
      confirmPassword: '',
      profilePicturePath: user?.profilePicturePath
    })
    if (imgRef.current) imgRef.current.value = ''
    setImgPreview(user?.profilePicturePath ?? '')
  }

  // 계정 해지
  const handleDeactiveAccount = () => {
    toast.dismiss() // 이미 존재하는 토스트 모두 제거

    toast(
      <S.ToastDAContainer>
        <p>⚠️ 정말 계정을 해지하시겠습니까?</p>
        <S.ToastDABtnContainer>
          <S.ToastDACancleBtn onClick={() => toast.dismiss()}>
            취소
          </S.ToastDACancleBtn>
          <S.ToastDAAcceptBtn
            onClick={async () => {
              toast.dismiss()
              toast.promise(
                deactivateAccount(),
                {
                  loading: '해지 중...',
                  success: '계정이 성공적으로 해지되었습니다.',
                  error: '계정 해지 중 오류가 발생했습니다.'
                },
                {
                  id: 'deactivate-process',
                  duration: 3000, // success, error 표시
                  position: 'top-center'
                }
              )
            }}>
            해지
          </S.ToastDAAcceptBtn>
        </S.ToastDABtnContainer>
      </S.ToastDAContainer>,
      {
        position: 'top-center',
        duration: Infinity,
        id: 'deactivate-account' // 토스트 중복 방지를 위한 id
      }
    )
  }

  // 디버깅용
  console.log('current edit profile form', {
    errors: errors,
    data: watch()
  })

  return (
    <S.EditProfileFormContainer>
      <S.EditProfileFormTitle>프로필 수정</S.EditProfileFormTitle>
      <S.EditProfileForm onSubmit={handleSubmit(onSubmit)}>
        <S.ProfileImg
          src={imgPreview ?? user?.profilePicturePath}
          alt="profileImg"
        />
        <S.PictureInput
          type="file"
          id="profilePicturePath"
          {...register('profilePicturePath')}
          // error={ errors.profilePicturePath }
          ref={imgRef}
          onChange={handleImageChange}
        />
        {errors.profilePicturePath && (
          <S.ErrorMessage>{errors.profilePicturePath?.message}</S.ErrorMessage>
        )}
        <S.FormField>
          <S.ChangeImageButton
            type="button"
            onClick={() => imgRef.current?.click()}>
            이미지 변경
          </S.ChangeImageButton>
        </S.FormField>
        <S.FormField>
          <S.Input
            type="nickname"
            id="nickname"
            {...register('nickname')}
            placeholder="닉네임을 입력해주세요"
            // error={ errors.nickname }
            onBlur={() => checkDuplicateNickname()} // 닉네임 중복 체크
          />
          {errors.nickname && (
            <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
          )}
        </S.FormField>
        <S.FormField>
          <S.Input
            type="password"
            id="password"
            {...register('password')}
            placeholder="비밀번호를 입력해주세요 (6자 이상)"
            // error={ errors.password }
          />
          {errors.password && (
            <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
          )}
        </S.FormField>
        <S.FormField>
          <S.Input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword')}
            placeholder="비밀번호를 다시 입력해주세요"
            // error={ errors.confirmPassword }
          />
          {errors.confirmPassword && (
            <S.ErrorMessage>{errors.confirmPassword?.message}</S.ErrorMessage>
          )}
        </S.FormField>

        <S.FormButtonContainer>
          {isFormChanged && (
            <S.CancleButton
              type="button"
              onClick={handleCancel}>
              변경 되돌리기
            </S.CancleButton>
          )}
          <S.SubmitButton
            disabled={
              isSubmitting ||
              Object.keys(errors).length > 0 ||
              isEditProfilePending
            }>
            {isEditProfilePending ? '저장 중...' : '변경 저장'}
          </S.SubmitButton>
        </S.FormButtonContainer>

        <S.DeactivateAccountButton
          type="button"
          onClick={handleDeactiveAccount}>
          {isDeactivateAccountPending ? '해지 중...' : '계정 해지'}
        </S.DeactivateAccountButton>
      </S.EditProfileForm>
    </S.EditProfileFormContainer>
  )
}
