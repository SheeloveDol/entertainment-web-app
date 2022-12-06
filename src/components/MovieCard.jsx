import { Movies } from "../pages"

import poster from '../assets/thumbnails/112/regular/small.jpg'


const MovieCard = ({movie}) => {
  
  // const url = movie.thumbnail.regular.small;
  const title = movie.title
    console.log(title)
  const year = movie.year
  console.log(year)
 

   const getImageUrl = () => {
    return new URL(movie.thumbnail.regular.small, import.meta.url).href
   }
  
  return (
    <div className=" p-2">
      
      <img className="rounded-md" src={getImageUrl()}/>
      <div>
        {movie.year} . {movie.category} . {movie.rating}
      </div>
      <div className="">
        {movie.title}
      </div>
    </div>
  )
}

export default MovieCard