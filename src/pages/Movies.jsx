import Card from "../components/Card"
import { useGlobalContext } from "../context";

const Movies = () => {

  const { data } = useGlobalContext();
  const movies = data.filter((item) => item.category === "Movie")
  
  return (
    <div>
      <h2 className="text-lg mb-4" >Movies</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {
          movies.map((item, i) => (
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