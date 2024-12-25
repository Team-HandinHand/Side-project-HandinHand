export interface TApiError extends Error {
  status?: number
}

export type TOccurErrorFunctionType =
  | '회원가입'
  | '로그인'
  | '로그아웃'
  | '프로필 수정'
