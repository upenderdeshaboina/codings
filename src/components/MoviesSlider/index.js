// Write your code here
import Slick from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <div className="slick-container">
      <Slick {...settings}>
        {moviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} details={eachMovie} />
        ))}
      </Slick>
    </div>
  )
}
export default MoviesSlider
