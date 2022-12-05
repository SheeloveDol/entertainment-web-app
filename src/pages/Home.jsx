import MovieCard from "../components/MovieCard"

const Home = () => {

  const movies = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  return (
    <div className="border grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
      {
        movies.map((movie) => (
          <MovieCard />
        ))
      }
    </div>
  )
}

export default Home
