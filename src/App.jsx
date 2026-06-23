import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MyList } from './pages/MyList'
import { MovieDetails } from './pages/MovieDetails'
import { movies } from './data/movies'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage movies={movies} />} />
      <Route path='/movie/:movieId' element={<MovieDetails movies={movies} />} />
      <Route path='/mylist' element={<MyList />} />
    </Routes>
  )
}

export default App
