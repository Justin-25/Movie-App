import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MovieGrid } from "../components/MovieGrid";
import './HomePage.css'

export function HomePage() {
  return (
    <div className="homepage-container">
      <Header />

      <div className="movie-grid-container">
        <span  className="heading-movie">Movies</span>

        <MovieGrid />
      </div>

      <Footer />
    </div>
  )
}