import { Login, Home, Movies, TVseries, Bookmarked } from './pages'

import Navbar from './components/Navbar'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div className="border-2 border-red-600 bg-[#10141E] text-white md:flex sm:p-4 md:min-h-full md:justify-center min-w-[375px]">
      <Navbar/>
      <div>
        <Search />
        <Routes>
          { /* <Route path="/" element={<Login />} /> */ }
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TVseries />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
