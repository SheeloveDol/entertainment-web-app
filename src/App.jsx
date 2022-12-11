import { Login, Home, Movies, TVseries, Bookmarked } from './pages'

import Navbar from './components/Navbar'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div className="bg-[#10141E] text-white md:flex p-4 sm:p-4  md:justify-center min-w-[375px] ">
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
