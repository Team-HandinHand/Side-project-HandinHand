import {
  MediaDetails,
  MediaResult,
  MovieDetails,
  MovieResult
} from '@/types/media'

const checkIsMovie = (
  media: MediaResult | MediaDetails
): media is MovieResult | MovieDetails => {
  return 'title' in media
}

export default checkIsMovie
