import Slider from 'react-slick'

import MovieItem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {Details} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <ul className="slider-container">
      <Slider {...settings}>
        {Details.map(each => (
          <MovieItem EachImage={each} key={each.id} />
        ))}
      </Slider>
    </ul>
  )
}

export default MoviesSlider
