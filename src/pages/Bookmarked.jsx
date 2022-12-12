import Card from "../components/Card"
import Search from "../components/Search"
import { useGlobalContext } from "../context"


const Bookmarked = () => {

  const { bookmarkedMovies, bookmarkedTVSeries } = useGlobalContext()

  return (
    
    <div>
      <Search placeholder="Search for bookmarked shows"/>
      <h2 className="text-lg mb-5">Bookmarked Movies</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center mb-20">
        {
          bookmarkedMovies.map((item, i) =>  (
            <Card 
              key={i}
              item={item}
            />
          ))
        }
      </div>

      <h2 className="text-lg mb-5">Bookmarked TV Series</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {
          bookmarkedTVSeries.map((item, i) =>  (
            <Card 
              key={i}
              item={item}
            />
          ))
        }
      </div>
    </div>
      
      
        
      
  )
}

export default Bookmarked