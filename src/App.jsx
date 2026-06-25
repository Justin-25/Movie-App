import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MyList } from "./pages/MyList";
import { MovieDetails } from "./pages/MovieDetails";
import { movies } from "./data/movies";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [myList, setMyList] = useState(
    JSON.parse(localStorage.getItem("mylist")) || [],
  );

  function toggleMovie(movie) {
    setMyList((prevM) =>
      prevM.some((prevMovies) => prevMovies.id === movie.id)
        ? prevM.filter((prevMovies) => prevMovies.id !== movie.id)
        : [...prevM, movie],
    );
  }

  useEffect(() => {
    localStorage.setItem("mylist", JSON.stringify(myList));
  }, [myList]);

  return (
    <Routes>
      <Route path="/" element={<HomePage myList={myList} movies={movies} toggleMovie={toggleMovie} />} />
      <Route
        path="/movie/:movieId"
        element={<MovieDetails myList={myList} movies={movies} toggleMovie={toggleMovie} />}
      />
      <Route path="/mylist" element={<MyList movies={movies} myList={myList} toggleMovie={toggleMovie} />} />
    </Routes>
  );
}

export default App;
