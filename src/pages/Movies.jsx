import Card from "../components/Card"
import { useGlobalContext } from "../context";
import Search from "../components/Search";

const Movies = () => {

  const { filteredSearchForMoviesPage, handleSearchFieldChange } = useGlobalContext();
  
  
  return (
    <div>
      <Search 
        placeholder="Search for movies"
        handleChange={handleSearchFieldChange}
      />
      <h2 className="text-lg mb-4" >Movies</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center min-h-[100vh] ">
        {
          filteredSearchForMoviesPage.length === 0 ? "No results, please try again..." :
          filteredSearchForMoviesPage.map((item, i) => (
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

export default Movies