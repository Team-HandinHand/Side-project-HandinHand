import StarRating from '@/components/common-ui/star-rating/StarRating'
import * as S from '../components/movie-details/MovieDetails.styled'
import { Header } from '@/components'
import { useState } from 'react'
import ContentInfo from '@/components/movie-details/ContentInfo'
import ContentRelated from '@/components/movie-details/ContentRelated'

export function MovieDetails() {
  const [showType, setShowType] = useState<'content' | 'related'>('content')

  return (
    <S.Container>
      <Header $backgroundColor="black" />
      {/* 첫번째 박스 */}
      <S.MovieHeaderContainer>
        <S.MovieInfo>
          <S.MovieTitle>영화 제목</S.MovieTitle>
          <S.InfoBox>
            <S.Info>연령</S.Info>
            <S.Info>4.1</S.Info>
            <S.Info>2016</S.Info>
            <S.Info>2시간7분</S.Info>
            <S.Info>코메디</S.Info>
            <S.Info>피아노</S.Info>
          </S.InfoBox>

          <S.MovieDescription>
            꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈 피아니스트
            ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마 스톤), 인생에서
            가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기
            시작한다.
          </S.MovieDescription>
          <StarRating size={48} />
        </S.MovieInfo>

        <S.MoviePoster
          src="https://via.placeholder.com/300x450"
          alt="Movie Poster"
        />
      </S.MovieHeaderContainer>

      {/* 두번째 박스 */}
      <S.SeparatingBox>
        <S.ShowTypes
          onClick={() => setShowType('content')}
          isActive={showType === 'content'}>
          콘텐츠 정보
        </S.ShowTypes>
        <S.ShowTypes
          onClick={() => setShowType('related')}
          isActive={showType === 'related'}>
          관련 콘텐츠
        </S.ShowTypes>
      </S.SeparatingBox>
      {showType === 'content' ? <ContentInfo /> : <ContentRelated />}
    </S.Container>
  )
}
