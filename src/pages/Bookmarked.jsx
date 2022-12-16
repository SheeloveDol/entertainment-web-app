import Card from "../components/Card"
import Search from "../components/Search"
import { useGlobalContext } from "../context"


const Bookmarked = () => {

  const { filteredSearchBookmarkedMovies, filteredSearchBookmarkedTVSeries, handleSearchFieldChange } = useGlobalContext()

  return (
    
    <div className="lg:ml-28">
      <Search 
        placeholder="Search for bookmarked shows"
        handleChange={handleSearchFieldChange}  
      />
      <h2 className="text-lg mb-5">Bookmarked Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-center mb-20 ">
        {
          filteredSearchBookmarkedMovies.length === 0 ? "No results, please try again" : 
          filteredSearchBookmarkedMovies.map((item, i) =>  (
            <Card 
              key={i}
              item={item}
            />
          ))
        }
      </div>

      <h2 className="text-lg mb-5">Bookmarked TV Series</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-center">
        {
          filteredSearchBookmarkedTVSeries.length === 0 ? "No results, please try again" : 
          filteredSearchBookmarkedTVSeries.map((item, i) =>  (
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