import { Back } from '@/components'
import * as S from '@/components/comment-detail/CommentDetail.styled'
import { CommentPosterBox } from '@/components/comment-detail/CommentPosterBox'
import { ReviewComment } from '@/components/comment-detail/ReviewComment'
import useFetchComment from '@/hooks/queries/useFetchComment'
import useFetchMovieMoreInfo from '@/hooks/queries/useFetchMediaMoreInfo'
import { formatDateWithDateObject } from '@/utils/getTime'
import { useParams } from 'react-router-dom'

export const CommentDetailPage = () => {
  const paramsData = useParams()

  const { details: mediaData } = useFetchMovieMoreInfo(
    paramsData.type as 'movie' | 'tv',
    Number(paramsData.mediaId)
  )

  const { data: commentData, isLoading } = useFetchComment({
    userId: paramsData.userId as string,
    mediaId: paramsData.mediaId as string
  })

  const createdTime = formatDateWithDateObject(commentData?.created_at ?? '')
  const updatedTime = formatDateWithDateObject(commentData?.updated_at ?? '')

  if (mediaData.isLoading || isLoading) {
    return <p>로딩중입니다.</p>
  }

  console.log(commentData)

  return (
    <S.PageContainer>
      <Back />
      <S.ContentsContainer>
        <CommentPosterBox
          mediaData={mediaData.data}
          isLoading={mediaData.isLoading}
          created_at={
            commentData?.created_at === commentData?.updated_at
              ? createdTime
              : `${updatedTime}(수정됨)`
          }
        />
        <S.ContentsMain>
          <ReviewComment commentData={commentData} />
        </S.ContentsMain>
      </S.ContentsContainer>
    </S.PageContainer>
  )
}
