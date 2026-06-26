import { Check, Heart, MoveLeft, Plus, Star } from "lucide-react";
import "./MovieDetails.css";
import { NavLink, useParams } from "react-router-dom";

export function MovieDetails({ movies, myList, toggleMovie, likedMovies, toggleLikedMovie }) {
  const { movieId } = useParams();

  const movieDetails = movies.find((movie) => {
    return movie.id === movieId;
  });

  if (!movieDetails) {
    return null;
  }

  const isSaved = myList.some(
    (savedMovie) => savedMovie.id === movieDetails.id,
  );

  const isLiked = likedMovies.some(
    (likedMovie) => likedMovie.id === movieDetails.id
  )

  const handleClick = () => {
    toggleMovie(movieDetails);
  };

  const handleLikedMovie = () => {
    toggleLikedMovie(movieDetails)
  }

  return (
    <div className="container">
      <NavLink className="back-container" to="/">
        <span>
          <MoveLeft size={40} />
        </span>
      </NavLink>
      <div className="movie-details-container">
        <div className="movie-details">
          <div className="details-image-container">
            <img src={movieDetails.poster} />
          </div>
          <div className="details">
            <div className="details-title">{movieDetails.title}</div>
            <div className="details-genre">
              Genre: {movieDetails.genres.join(", ")}
            </div>
            <div className="details-rating">
              <Star size={20} className="rating-stars" />{" "}
              {movieDetails.rating.score} Votes:{" "}
              {movieDetails.rating.votes}{" "}
            </div>
            <div className="button-container">
              {isLiked ? (
                <button className="liked-button" onClick={handleLikedMovie}>
                  <Heart className="hearted" />
                  Liked
                </button>
              ) : (
                <button className="like-button" onClick={handleLikedMovie}>
                  <Heart className="heart" />
                  Like
                </button>
              )}
              {isSaved ? (
                <button
                  className="remove-to-mylist-button"
                  onClick={handleClick}
                >
                  <Check />
                </button>
              ) : (
                <button className="add-to-mylist-button" onClick={handleClick}>
                  <Plus /> Add
                </button>
              )}
            </div>
            <div className="description">{movieDetails.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
