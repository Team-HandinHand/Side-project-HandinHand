import * as S from './SignUpForm.styles'
import { useState, useCallback, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signUpSchema, TSignUpFormValues } from '@/schemas/user/signUpSchema'
import { useCheckDuplicate } from '@/hooks/mutations/useCheckDuplicate'
import { useSignUp } from '@/hooks/mutations/useSignUp'
import { Button } from '@/components'

export const SignUpForm = () => {
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
    getValues,
    trigger,
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

  useEffect(() => {
    trigger()
  }, [trigger])

  const { signUp, isPending } = useSignUp(
    (field: keyof TSignUpFormValues, message: string) => {
      setError(field, { message })
      setValidFields(prev => ({ ...prev, [field]: false }))
    }
  )

  // 닉네임, 이메일 중복 체크
  const { checkDuplicate: checkNickname, isPending: isCheckNicknamePending } =
    useCheckDuplicate()
  const { checkDuplicate: checkEmail, isPending: isCheckEmailPending } =
    useCheckDuplicate()

  // 닉네임 중복 체크
  const checkDuplicateNickname = useCallback(async () => {
    const currNickname = getValues('nickname')
    const isDuplicate = await checkNickname({
      field: 'nickname',
      value: currNickname
    })

    if (isDuplicate) {
      setError('nickname', {
        message: '이미 사용 중인 닉네임입니다'
      })
      setValidFields(prev => ({ ...prev, nickname: false }))
    } else {
      setValidFields(prev => ({ ...prev, nickname: true }))
    }
  }, [setError, checkNickname, getValues])

  // 이메일 중복 체크
  const checkDuplicateEmail = useCallback(async () => {
    const currEmail = getValues('email')
    const isDuplicate = await checkEmail({
      field: 'email',
      value: currEmail
    })

    if (isDuplicate) {
      setError('email', {
        message: '이미 가입된 이메일입니다'
      })
      setValidFields(prev => ({ ...prev, email: false }))
    } else {
      setValidFields(prev => ({ ...prev, email: true }))
    }
  }, [setError, checkEmail, getValues])

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
            <S.FormInput
              type="text"
              id="nickname"
              {...register('nickname', {
                onChange: () =>
                  setValidFields(prev => ({ ...prev, nickname: false }))
              })}
              placeholder="닉네임을 입력해주세요"
              error={touchedFields.nickname && !!errors.nickname}
            />
            <Button
              type="button"
              color="transparent"
              size="small"
              disabled={!getValues('nickname')}
              onClick={checkDuplicateNickname}>
              {isCheckNicknamePending ? '확인 중... ' : '중복 확인'}
            </Button>
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
            <S.FormInput
              type="email"
              id="email"
              {...register('email', {
                onChange: () =>
                  setValidFields(prev => ({ ...prev, email: false }))
              })}
              placeholder="이메일 (example@email.com)"
              error={touchedFields.email && !!errors.email}
            />
            <Button
              type="button"
              color="transparent"
              size="small"
              disabled={!getValues('email')}
              onClick={checkDuplicateEmail}>
              {isCheckEmailPending ? '확인 중... ' : '중복 확인'}
            </Button>
          </S.InputwithDuplicateBtn>
          {touchedFields.email && errors.email && (
            <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
          )}
          {validFields.email && (
            <S.SuccessMessage>가입 가능한 이메일입니다.</S.SuccessMessage>
          )}
        </S.FormField>
        <S.FormField>
          <S.FormInput
            type="password"
            id="password"
            {...register('password')}
            placeholder="비밀번호를 입력해주세요 (6자 이상)"
            error={touchedFields.password && !!errors.password}
          />
          {touchedFields.password && errors.password && (
            <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
          )}
        </S.FormField>
        <S.FormField>
          <S.FormInput
            type="password"
            id="confirmPassword"
            {...register('confirmPassword')}
            placeholder="비밀번호를 다시 입력해주세요"
            error={touchedFields.confirmPassword && !!errors.confirmPassword}
          />
          {touchedFields.confirmPassword && errors.confirmPassword && (
            <S.ErrorMessage>{errors.confirmPassword?.message}</S.ErrorMessage>
          )}
        </S.FormField>

        <S.SubmitButton
          color="pink"
          disabled={
            isSubmitting ||
            Object.keys(errors).length > 0 ||
            isPending ||
            !validFields.nickname ||
            !validFields.email
          }>
          {isPending ? '가입 중...' : '가입하기'}
        </S.SubmitButton>
        <S.ToOtherPageText href="/signin">
          회원가입이 되어 있으신가요?
        </S.ToOtherPageText>
      </S.SignUpForm>
    </S.SignUpFormContainer>
  )
}
