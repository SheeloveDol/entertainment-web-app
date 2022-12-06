// import { Movies } from "../pages"

// import poster from '../assets/thumbnails/112/regular/small.jpg'


const Card = ({item}) => {
  
   const getImageUrl = () => {
    return new URL(item.thumbnail.regular.small, import.meta.url).href
   }
  
  return (
    <div className=" p-2 "> 
      <img className="rounded-md cursor-pointer" src={getImageUrl()}/>
      <div className="py-1 font-thin ">
        {item.year} . {item.category} . {item.rating}
      </div>
      <div className="">
        {item.title}
      </div>
    </div>
  )
}

export default Card