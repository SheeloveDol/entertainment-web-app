import movieIcon from '../assets/icon-category-movie.svg';
import tvSeriesIcon from '../assets/icon-category-tv.svg';


const Card = ({item}) => {
  
   const getImageUrl = () => {
    return new URL(item.thumbnail.regular.small, import.meta.url).href
   }
  
  return (
    <div className=" font-outfit "> 
      <img className="rounded-md cursor-pointer" src={getImageUrl()}/>
      <div className="py-1 text-xs text-slate-500 flex items-center gap-2">
        <div>
          {item.year}
        </div> 
        <div className='border border-gray-400 align-middle h-1'></div>
        <div className='flex gap-1 h-4 items-center'>
          {item.category === "Movie" ? <img className="h-3" src={movieIcon}/> : <img className="h-3.5" src={tvSeriesIcon}/>} {item.category}
        </div>
        <div className='border border-gray-400 align-middle h-1'></div>
        <div >
          {item.rating}
        </div>  
      </div>
      <div className="text-sm">
        {item.title}
      </div>
    </div>
  )
}

export default Card