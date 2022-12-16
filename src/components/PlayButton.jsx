import playButton from "/assets/icon-play.svg";

const PlayButton = () => {
  return (
    <div className="w-full h-full rounded-lg bg-slate-800 bg-opacity-50 flex justify-center items-center invisible group-hover:visible">
      <div className="hover:animate-pulse hover:scale-125 flex gap-3 align-middle rounded-full p-1 pr-3 bg-slate-300 bg-opacity-30">
        <img className="h-4" src={playButton} />
        <p className="text-xs flex items-center">Play</p>
      </div>
    </div>
  );
};

export default PlayButton;
