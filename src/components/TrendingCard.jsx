import { useGlobalContext } from "../context";
import PlayButton from "./PlayButton";
import movieIcon from "/assets/icon-category-movie.svg";
import tvSeriesIcon from "/assets/icon-category-tv.svg";
import fullBookmark from "/assets/icon-bookmark-full.svg";
import emptyBookmark from "/assets/icon-bookmark-empty.svg";

const TrendingCard = ({ item, index }) => {
  const { handleBookmarkClick } = useGlobalContext();

  return (
    <div className="font-outfit h-full flex relative">
      <div
        className={`w-80 group relative  bg-center bg-cover cursor-pointer h-full  rounded-lg gap-3 `}
        style={{ backgroundImage: `url('${item.thumbnail.trending.large}')` }}
      >
        <div
          className="h-5 w-5 absolute top-3 right-3 flex justify-center items-center rounded-full bg-slate-900 bg-opacity-25 p-1.5"
          onClick={handleBookmarkClick}
        >
          {item.isBookmarked === true ? (
            <img src={fullBookmark} alt='Bookmark full icon' />
          ) : (
            <img src={emptyBookmark} alt='Bookmark empty icon' />
          )}
        </div>
        <PlayButton />
      </div>
      <div className="py-1 text-[0.65rem] absolute bottom-4 left-4 text-slate-400 flex  flex-col  min-w-[50%]">
        <div className="flex gap-2 items-center ">
          <div>{item.year}</div>
          <div className="border border-gray-400 align-middle rounded-full h-0.5 w-0.5"></div>
          <div className="flex gap-1 h-4 items-center ">
            {item.category === "Movie" ? (
              <img className="h-3" src={movieIcon} alt='Movie icon' />
            ) : (
              <img className="h-3.5" src={tvSeriesIcon} alt='TV series icon' />
            )}
            {item.category}
          </div>
          <div className="border border-gray-400 align-middle rounded-full h-0.5 w-0.5"></div>
          <div>{item.rating}</div>
        </div>
        <div className="text-lg text-white">{item.title}</div>
      </div>
    </div>
  );
};

export default TrendingCard;
