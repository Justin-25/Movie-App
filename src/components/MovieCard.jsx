import { Check, Plus, Star } from "lucide-react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie, toggleMovie, isSaved }) {

  const handleClick = () => {
    toggleMovie(movie)
  }
  
  return (
    <>
      <div className="movie-card">
        <div className="movie-image-container">
          <Link to={`/movie/${movie.id}`} className="movie-card-link">
            <img src={movie.poster} className="movie-image" />
            <span className="rating">
              <Star size={18} className="rating-star" /> {movie.rating.score}
            </span>
          </Link>
          {isSaved ? (
            <button
              className="remove-to-my-list"
              onClick={handleClick}
            >
              <Check size={18} />
            </button>
          ) : (
            <button
              className="add-to-my-list"
              onClick={handleClick}
            >
              <Plus size={18} />
            </button>
          )}
        </div>
        <Link to={`/movie/${movie.id}`} className="movie-card-link">
          <div className="movie-title">{movie.title}</div>
        </Link>
      </div>
    </>
  );
}
