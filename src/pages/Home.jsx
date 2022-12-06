import Card from "../components/Card"
import CardList from "../components/CardList";
import { useGlobalContext } from "../context";

const Home = () => {

  // const movies = useGlobalContext()
  const { data } = useGlobalContext();

  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
      {
        data.map((item, i) => (
          <Card 
            key={i}
            item={item} 
          />
        ))
      }
    </div>
  )
}

export default Home
