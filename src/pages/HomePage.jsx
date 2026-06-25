import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MovieGrid } from "../components/MovieGrid";
import './HomePage.css'

export function HomePage({
  movies,
  myList,
  toggleMovie
}) {

  return (
    <div className="homepage-container">
      <div className="top-container"></div>
      <Header />

      <div className="movie-grid-container">
        <span  className="heading-movie">Movies</span>

        <MovieGrid movies={movies} myList={myList} toggleMovie={toggleMovie} />
      </div>

      <Footer />
    </div>
  )
}