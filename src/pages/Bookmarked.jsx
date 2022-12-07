import Card from "../components/Card"
import { useGlobalContext } from "../context"


const Bookmarked = () => {

  const { data } = useGlobalContext()

  const bookmarkedMovies = data.filter((item) => (
    (item.isBookmarked && item.category === 'Movie')
  ))
  

  const bookmarkedTVSeries = data.filter((item) => (
    (item.isBookmarked && item.category === 'TV Series')
  ))

  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
      <h2 className="mb-6">Bookmarked Movies</h2>
      {
        bookmarkedMovies.map((item, i) =>  (
          <Card 
            key={i}
            item={item}
          />
        ))
      }
      <h2>Bookmarked TV Series</h2>
      {
        bookmarkedTVSeries.map((item, i) =>  (
          <Card 
            key={i}
            item={item}
          />
        ))
      }
    </div>
  )
}

export default Bookmarked