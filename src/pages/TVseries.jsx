import Card from "../components/Card"
import { useGlobalContext } from "../context"



const TVseries = () => {

  const { data } = useGlobalContext()
  const tvSeries = data.filter((item) => item.category === "TV Series");

  return (
    <div>
      <h2 className="mb-4">TV Series</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {
          tvSeries.map((item, i) => (
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