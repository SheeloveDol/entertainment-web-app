import Card from "../components/Card"
import Search from "../components/Search"
import { useGlobalContext } from "../context"



const TVseries = () => {

  const { tvSeriesOnlyData } = useGlobalContext()

  return (
    <div>
      <Search placeholder="Search for TV series"/>
      <h2 className="text-lg mb-4">TV Series</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {
          tvSeriesOnlyData.map((item, i) => (
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

export default TVseries