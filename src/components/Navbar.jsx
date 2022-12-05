import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import homeNavIcon from "../assets/icon-nav-home.svg";
import moviesNavIcon from "../assets/icon-nav-movies.svg";
import tvSeriesNavIcon from "../assets/icon-nav-tv-series.svg";
import bookmarkNavIcon from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";


const Navbar = () => {
  return (
    <div className="bg-[#161D2F] flex justify-between items-center  md:flex-col md:h-screen p-4 md:p-6 md:mr-5 rounded-lg">
        <Link to={"/"}>
            <img src={logo}/>
        </Link>
        <div className="flex gap-6 md:flex-col ">
            <Link to={"/"}>
                <img src={homeNavIcon} alt="Home navigation icon" />
            </Link>
            <Link to={"/movies"}>
                <img src={moviesNavIcon} alt="Movies navigation icon" />
            </Link>
            <Link to={"tvseries"}>
                <img src={tvSeriesNavIcon} alt="Tv Series navigation icon" />
            </Link>
            <Link to={"/bookmarked"}>
                <img src={bookmarkNavIcon} alt="Bookmarked navigation icon" /> 
            </Link>
        </div>
        <div >
            <img 
                className="
                    border-white 
                    border-2 
                    rounded-full
                    h-8" 
                src={avatar} 
                alt="Profile image"
            />
        </div>

    </div>
  )
}

export default Navbar