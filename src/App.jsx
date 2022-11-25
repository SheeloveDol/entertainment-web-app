import { Login, Home, Movies, TVseries, Bookmarked } from './pages'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVseries />} />
        <Route path="/bookmarked" element={<Bookmarked />} />
      </Routes>
    </div>
  )
}

export default App
