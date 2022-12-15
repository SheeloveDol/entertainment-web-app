import { Login, Home, Movies, TVseries, Bookmarked } from './pages'

import Navbar from './components/Navbar'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div className='bg-[#10141E] min-h-screen lg:relative'>
      <div className="m-auto font-outfit text-white  p-4 sm:p-4 lg:grid-flow-col lg:justify-center min-w-[300px]  ">

        <Navbar/>
        <div>
          
          <Routes>
            { /* <Route path="/" element={<Login />} /> */ }
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvseries" element={<TVseries />} />
            <Route path="/bookmarked" element={<Bookmarked />} />
          </Routes>
        </div>
      </div>
    </div>

  )
}

export default App

//lg:w-44