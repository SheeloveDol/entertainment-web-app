import movieIcon from '../assets/icon-category-movie.svg';
import tvSeriesIcon from '../assets/icon-category-tv.svg';


const Card = ({item}) => {
  
   const getImageUrl = () => {
    return new URL(item.thumbnail.regular.small, import.meta.url).href
   }

   const background = `'${item.thumbnail.regular.small}'`;
   const example = [112, 'Beyond-Earth']
   const Attempt = () => (example.map(item => <div className={`h-36 bg-${item}`}></div>))
   const desperate = "'./assets/thumbnails/112/regular/small.jpg'"
  //  console.log(attempt())
   
   console.log(getImageUrl())
   console.log('---------------')
   console.log(background)
   console.log('---------------')
   console.log(`'${item.thumbnail.regular.small}'`)
   
  return (
    <div className=" font-outfit "> 
      <div>
      <div 
      className={`h-36 w-full border bg-cover`}
      style={{backgroundImage: `url('${getImageUrl()}')`}}
      

    >
      Hello everyOne
    </div>
      </div>
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