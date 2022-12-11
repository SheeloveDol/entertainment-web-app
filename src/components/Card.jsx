import movieIcon from "../assets/icon-category-movie.svg";
import tvSeriesIcon from "../assets/icon-category-tv.svg";
import playButton from "../assets/icon-play.svg"

const Card = ({ item }) => {

  //Had to do it this way because of Vite's and tailwind's quirks.
  const getImageUrl = () => {
    return new URL(item.thumbnail.regular.small, import.meta.url).href;
  };


  return (
    <div className=" font-outfit ">
      <divb >
        <div
          className={`w-full group bg-cover cursor-pointer h-[7rem] rounded-lg`}
          style={{ backgroundImage: `url('${getImageUrl()}')` }}
        >
          <div className="w-full h-full rounded-lg bg-slate-800 bg-opacity-50 flex justify-center items-center invisible group-hover:visible">
            <div className=" flex gap-3 align-middle rounded-full p-1 pr-3 bg-slate-300 bg-opacity-30">
              <img  className="h-4" src={playButton} />
              <p className="text-xs flex items-center">Play</p>
            </div>
          </div>
        </div>
      </divb>
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
