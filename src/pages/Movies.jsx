import Card from "../components/Card"
import CardList from "../components/CardList";
import { useGlobalContext } from "../context";

const Movies = () => {

  const { data } = useGlobalContext();
  const movies = data.filter((item) => item.category === "Movie")
  
  return (
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
  )
}

export default Movies