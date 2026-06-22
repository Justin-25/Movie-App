import { Plus, Star } from "lucide-react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  return (
    <>
      <Link to={`/movie/${movie.id}`} className="movie-card-link">
        <div className="movie-card">
          <div className="movie-image-container">
            <img src={movie.poster} className="movie-image" />
            <span className="rating">
              <Star size={18} className="rating-star" /> {movie.rating.score}
            </span>
            <div className="add-to-my-list">
              <Plus size={18} />
            </div>
          </div>
          <div className="movie-title">{movie.title}</div>
        </div>
      </Link>
    </>
  );
}
