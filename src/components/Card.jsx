import movieIcon from "../assets/icon-category-movie.svg";
import tvSeriesIcon from "../assets/icon-category-tv.svg";

const Card = ({ item }) => {

  //Had to do it this way because of Vite's and tailwind's quirks.
  const getImageUrl = () => {
    return new URL(item.thumbnail.regular.small, import.meta.url).href;
  };

  
  return (
    <div className=" font-outfit ">
      <div>
        <div
          className={`w-full  bg-cover h-[7rem] rounded-lg`}
          style={{ backgroundImage: `url('${getImageUrl()}')` }}
        >
  
        </div>
      </div>
      <div className="py-1 text-[0.65rem] text-slate-500 flex items-center gap-2">
        <div>{item.year}</div>
        <div className="border border-gray-400 align-middle h-1"></div>
        <div className="flex gap-1 h-4 items-center">
          {item.category === "Movie" ? (
            <img className="h-3" src={movieIcon} />
          ) : (
            <img className="h-3.5" src={tvSeriesIcon} />
          )}{" "}
          {item.category}
        </div>
        <div className="border border-gray-400 align-middle h-1"></div>
        <div>{item.rating}</div>
      </div>
      <div className="text-xs">{item.title}</div>
    </div>
  );
};

export default Card;
