import * as S from '@/components/comment-detail/CommentDetail.styled'
import { ReviewComment } from '@/components/comment-detail/ReviewComment'
import { PosterBox } from '@/components/common-ui/posterBox/PosterBox'
import { IoArrowBack } from 'react-icons/io5'

export const CommentDetailPage = () => {
  return (
    <S.PageContainer>
      <IoArrowBack />
      <S.ContentsContainer>
        <S.ContentsHeader>
          <PosterBox
            title="어벤져스: 인피니티 워"
            imageUrl="https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
            date="2021-01-27"
            isLoading={false}
            flex={true}
          />
          <S.WrittenDate>작성일: 2024.10.23</S.WrittenDate>
        </S.ContentsHeader>
        <S.ContentsMain>
          <ReviewComment
            readonly={false}
            commentData={`2024년 가장 기억에 남는 영화\n2024년 가장 기억에 남는 영화\n2024년 가장 기억에 남는 영화\n2024년 가장 기억에 남는 영화\n2024년 가장 기억에 남는 영화\n2024년 가장 기억에 남는 영화`}
          />
        </S.ContentsMain>
      </S.ContentsContainer>
    </S.PageContainer>
  )
}
