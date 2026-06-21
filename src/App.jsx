import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { MyList } from './pages/MyList'
import { MovieDetails } from './pages/MovieDetails'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
      <Route path='/mylist' element={<MyList />} />
    </Routes>
  )
}

export default App
