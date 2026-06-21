import { Plus, Star } from "lucide-react";
import "./MovieGrid.css";

// To do:
// Make animation for the Movie Grid

export function MovieGrid({ movies }) {
  return (
    <div className="grid-container">
      <div className="movie-container">
        {movies.map((movie) => {
          return (
            <div className="movie-grid">
              <div className="movie-image-container">
                <img
                  src={movie.poster}
                  className="movie-image"
                />
                <span className="rating">
                  <Star size={18} className="rating-star" /> {movie.rating.score}
                </span>
                <div className="add-to-my-list">
                  <Plus size={18} />
                </div>
              </div>
              <div className="movie-title">{movie.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
