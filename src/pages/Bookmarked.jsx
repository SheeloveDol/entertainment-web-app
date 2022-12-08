import Card from "../components/Card"
import { useGlobalContext } from "../context"


const Bookmarked = () => {

  const { data } = useGlobalContext()

  const bookmarkedMovies = data.filter((item) => (
    (item.isBookmarked && item.category === 'Movie')
  ));
  

  const bookmarkedTVSeries = data.filter((item) => (
    (item.isBookmarked && item.category === 'TV Series')
  ));

  return (
    <div>
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