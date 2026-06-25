import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MovieGrid } from "../components/MovieGrid";
import "./MyList.css";

export function MyList({ myList, toggleMovie }) {
  return (
    <div>
      <div className="top-container"></div>
      <Header />

      <div className="movie-grid-container">
        <span className="heading-movie">My list</span>
        {myList.length === 0 ? (
          <div className="reminder-mylist">
            <span>
              Browse some movies to see what interested you, then add to the "My
              list" so you will not be losts
            </span>
            <img src="/images/reminder.png" className="reminder-image" />
          </div>
        ) : (
          <MovieGrid
            movies={myList}
            myList={myList}
            toggleMovie={toggleMovie}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
