import MoviesSlider from '../MoviesSlider'

import {
  PrimeVideosContainer,
  Image,
  MoviesContainer,
  MoviesHeading,
} from './styledComponents'

const actionMovieId = 'ACTION'
const comedyMovieId = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovieId,
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovieId,
  )

  return (
    <PrimeVideosContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer>
        <MoviesHeading>Action Movies</MoviesHeading>
        <MoviesSlider moviesList={actionMoviesList} />
        <MoviesHeading>Comedy Movies</MoviesHeading>
        <MoviesSlider moviesList={comedyMoviesList} />
      </MoviesContainer>
    </PrimeVideosContainer>
  )
}

export default PrimeVideo
