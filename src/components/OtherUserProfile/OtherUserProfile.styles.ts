import styled from 'styled-components'
import { TbMovie as MovieIcon } from 'react-icons/tb'
import { RiMovieLine as SeriesIcon } from 'react-icons/ri'

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-profile-background);
  color: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ProfileContainer = styled.div`
  width: 40%;
  height: 60vh;
  background-color: var(--color-white);
  border-radius: var(--border-radius-medium);
  position: relative;
  overflow: hidden;
`

export const ProfileBackgroundImg = styled.div`
  width: 100%;
  height: 30%;
  position: relative;
`

export const ProfileImg = styled.div`
  width: 18%;
  height: 90%;
  border-radius: 50%;
  border: 0.1px solid black;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 2%;
`

export const ProfileInfo = styled.div`
  width: 100%;
  height: 40%;
  position: relative;

  .name {
    font-size: var(--font-large);
    font-weight: 700;
    position: absolute;
    top: 35%;
    left: 2%;
  }

  .follow {
    position: absolute;
    top: 55%;
    left: 2%;
    font-size: 14px;
    color: var(--color-text-gray);

    .count {
      color: black;
      cursor: pointer;
      font-weight: 700;
    }
  }

  .desc {
    position: absolute;
    top: 70%;
    left: 2%;
    color: var(--color-text-gray);
  }
`

export const FollowButton = styled.div`
  margin-top: 1vh;
  width: 90%;
  height: 5vh;
  background-color: var(--color-text-dark);
  position: absolute;
  left: 5%;
  cursor: pointer;
  border-radius: var(--border-radius-medium);
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProfileReview = styled.div`
  width: 100%;
  height: 10vh;
  border-top: 0.1px solid rgba(128, 128, 128, 0.5);
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
`

export const ProfileReviewContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  .count {
    font-weight: 700;
    font-size: var(--font-large);
  }

  .desc {
    color: var(--color-text-gray);
  }
`

export const ProfileStorageWrapper = styled.div`
  margin-top: 1vh;
  width: 40%;
  height: 20vh;
  background-color: var(--color-white);
  border-radius: var(--border-radius-medium);

  .storage-title {
    position: relative;
    font-size: var(--font-large);
    font-weight: 700;
    top: 10%;
    left: 2%;
  }
`
export const ProfileStorageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
`
export const ProfileStorageBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  .sub-title {
    margin-top: 1vh;
    font-size: 20px;
    font-weight: 700;
  }
`
export const ProfileSubImg = styled.div`
  width: 20%;
  height: 50%;
  border-radius: 50%;
  background-color: var(--color-profile-background);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TbMovie = styled(MovieIcon)`
  font-size: var(--font-xlarge);
`

export const RiMovieLine = styled(SeriesIcon)`
  font-size: var(--font-xlarge);
`
