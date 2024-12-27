import Button from '@/components/CommonUI/Button.tsx/Button'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      size:large
      <br />
      <Button
        color="pink"
        size="large">
        가입하기
      </Button>
      <Button
        color="gray"
        size="large">
        가입하기
      </Button>
      <br />
      size:medium
      <br />
      <Button
        color="pink"
        size="medium">
        제출
      </Button>
      <br />
      size:small
      <br />
      <Button
        color="transparent"
        size="small">
        로그인
      </Button>
      <Button
        color="pink"
        size="small">
        회원가입
      </Button>
      <Button
        color="pink"
        size="small">
        수정완료
      </Button>
      <Button
        color="transparent"
        size="small">
        삭제
      </Button>
      <Button
        color="gray"
        size="small">
        취소
      </Button>
      <br />
      size:small / fontsize : custom
      <br />
      <Button
        color="pink"
        size="small"
        fontSize="14px">
        수정완료
      </Button>
      <Button
        color="transparent"
        size="small"
        fontSize="12px">
        삭제
      </Button>
    </div>
  )
}
