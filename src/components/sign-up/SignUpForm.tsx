import * as S from './SignUpForm.styles'
import { useState, useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signUpSchema, TSignUpFormValues } from '@/schemas/user/signUpSchema'
import { useCheckDuplicate } from '@/hooks/queries/useCheckDuplicate'
import { useSignUp } from '@/hooks/mutations/useSignUp'

export const SignUpForm = () => {
  const { signUp, isPending } = useSignUp()

  // 중복 확인 해야하는 필드 valid 여부
  const [validFields, setValidFields] = useState<{
    nickname?: boolean
    email?: boolean
  }>({})

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, touchedFields },
    setError,
    watch // 디버깅용
  } = useForm<TSignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  // 닉네임, 이메일 중복 체크
  const nicknameValue = watch('nickname')
  const emailValue = watch('email')

  const { checkDuplicate: checkNickname } = useCheckDuplicate(
    'nickname',
    nicknameValue
  )
  const { checkDuplicate: checkEmail } = useCheckDuplicate('email', emailValue)

  const checkDuplicateNicknameOrEmail = useCallback(
    async (field: 'nickname' | 'email') => {
      const result = await (field === 'nickname'
        ? checkNickname()
        : checkEmail())
      if (result.data) {
        setError(field, {
          message:
            field === 'nickname'
              ? '이미 사용 중인 닉네임입니다'
              : '이미 가입된 이메일입니다'
        })
        setValidFields(prev => ({ ...prev, [field]: false }))
      } else {
        setValidFields(prev => ({ ...prev, [field]: true }))
      }
    },
    [checkNickname, checkEmail, setError]
  )

  // 폼 제출 핸들러
  const onSubmit: SubmitHandler<TSignUpFormValues> = async formData => {
    await signUp(formData)
  }

  // 디버깅용
  console.log('current sign up form', {
    errors: errors,
    data: watch()
  })

  return (
    <S.SignUpFormContainer>
      <S.SignUpFormTitle>회원가입</S.SignUpFormTitle>
      <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <S.FormField>
          <S.InputwithDuplicateBtn>
            <S.Input
              type="nickname"
              id="nickname"
              {...register('nickname', {
                onChange: () =>
                  setValidFields(prev => ({ ...prev, nickname: false }))
              })}
              placeholder="닉네임"
              // error={ errors.nickname }
            />
            <button
              type="button"
              disabled={!nicknameValue}
              onClick={() => checkDuplicateNicknameOrEmail('nickname')}>
              중복 확인
            </button>
          </S.InputwithDuplicateBtn>
          {touchedFields.nickname && errors.nickname && (
            <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
          )}
          {validFields.nickname && (
            <S.SuccessMessage>사용 가능한 닉네임입니다</S.SuccessMessage>
          )}
        </S.FormField>
        <S.FormField>
          <S.InputwithDuplicateBtn>
            <S.Input
              type="email"
              id="email"
              {...register('email', {
                onChange: () =>
                  setValidFields(prev => ({ ...prev, email: false }))
              })}
              placeholder="이메일 (example@email.com)"
              // error={ errors.email }
            />
            <button
              type="button"
              disabled={!emailValue}
              onClick={() => checkDuplicateNicknameOrEmail('email')}>
              중복 확인
            </button>
          </S.InputwithDuplicateBtn>
          {touchedFields.email && errors.email && (
            <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
          )}
          {validFields.email && (
            <S.SuccessMessage>가입 가능한 이메일입니다.</S.SuccessMessage>
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
          {touchedFields.password && errors.password && (
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
          {touchedFields.confirmPassword && errors.confirmPassword && (
            <S.ErrorMessage>{errors.confirmPassword?.message}</S.ErrorMessage>
          )}
        </S.FormField>

        <S.SubmitButton
          disabled={
            isSubmitting || Object.keys(errors).length > 0 || isPending
          }>
          {isPending ? '가입 중...' : '가입하기'}
        </S.SubmitButton>
      </S.SignUpForm>
    </S.SignUpFormContainer>
  )
}
