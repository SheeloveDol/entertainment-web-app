import { Movies } from "../pages"

import poster from '../assets/thumbnails/112/regular/small.jpg'


const MovieCard = ({movie}) => {
  
  // const url = movie.thumbnail.regular.small;
  const title = movie.title
    console.log(title)

 

   const getImageUrl = (name) => {
    return new URL(`../assets/thumbnails/${title}.regular/small/jpg`, import.meta.url).href
   }
  
  return (
    <div className="border border-green-400 p-10">
      <img src={getImageUrl(title)}/>
    </div>
  )
}

export default MovieCard