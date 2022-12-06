import MovieCard from "../components/MovieCard"
import { useGlobalContext } from "../context";

const Home = () => {

  // const movies = useGlobalContext()
  const { data } = useGlobalContext();

  return (
    <div className="border grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
      {
        data.map((movie, i) => (
          <MovieCard 
            key={i}
            movie={movie} 
          />
        ))
      }
    </div>
  )
}

export default Home
