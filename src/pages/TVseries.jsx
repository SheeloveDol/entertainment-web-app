import Card from "../components/Card"
import { useGlobalContext } from "../context"



const TVseries = () => {

  const { data } = useGlobalContext()
  const tvSeries = data.filter((item) => item.category === "TV Series");

  return (
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
  )
}

export default TVseries