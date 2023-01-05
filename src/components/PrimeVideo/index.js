import MoviesSlider from '../MoviesSlider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PrimeVideo = props => {
  const ActionMovieList = () => {
    const {moviesList} = props

    const ActionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
    return ActionMovies
  }

  const ComedyMovieList = () => {
    const {moviesList} = props
    const ComedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
    return ComedyMovies
  }

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="logo-image"
      />
      <div className="Action-movies">
        <h1 className="main-heading">Action Movies</h1>
        <MoviesSlider Details={ActionMovieList()} />
        <h1 className="main-heading">Comedy Movies</h1>
        <MoviesSlider Details={ComedyMovieList()} />
      </div>
    </div>
  )
}

export default PrimeVideo
