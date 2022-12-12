import Card from "../components/Card"
import CardList from "../components/CardList";
import { useGlobalContext } from "../context";
import Search from "../components/Search"

const Home = () => {

  // const movies = useGlobalContext()
  const { data } = useGlobalContext();

  

  return (
    <div>
      <Search placeholder="Search for movies or TV series"/>
      <h2 className="text-lg pb-4">Recomended for you</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
        {
          data.map((item, index) => (
            
            <Card 
              key={index}
              id={index}
              item={item} 
            />
          ))
          
        }
      </div>
    </div>
  )
}

export default Home
