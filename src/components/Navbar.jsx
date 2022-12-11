import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import logo from "../assets/logo.svg";
import homeNavIcon from "../assets/icon-nav-home.svg";
import moviesNavIcon from "../assets/icon-nav-movies.svg";
import tvSeriesNavIcon from "../assets/icon-nav-tv-series.svg";
import bookmarkNavIcon from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";


const Navbar = () => {

    const { navButton, handleHomeIconClick, handleMoviesIconClick, handleTVSeriesIconClick, handleBookmarkedIconClick } = useGlobalContext();

  return (
    <div className="bg-[#161D2F] flex justify-between items-center lg:flex-col  lg:h-[95vh] p-4 md:p-6 md:mr-5 rounded-lg flex-none ">
        <Link to={"/"}>
            <img src={logo}/>
        </Link>
        <div className="flex gap-6 lg:flex-col ">
            <Link to={"/"}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    className={`hover:fill-[#FC4747] ${navButton === 'home' ? "fill-white" : "fill-[#5A698F]"}`}
                    onClick={handleHomeIconClick}
                >
                    <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"/>
                </svg>
            </Link>
            <Link to={"/movies"}>
                <svg
                    width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    className={`hover:fill-[#FC4747] ${navButton === 'movies' ? "fill-white" : "fill-[#5A698F]"}`}
                    onClick={handleMoviesIconClick} 
                >
                    <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"/>
                </svg>
            </Link>
            <Link to={"tvseries"}>
                <svg 
                    width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    className={`hover:fill-[#FC4747] ${navButton === 'tvSeries' ? "fill-white" : "fill-[#5A698F]"}`}
                    onClick={handleTVSeriesIconClick} 
                >
                    <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
                </svg>
            </Link>
            <Link to={"/bookmarked"}>
                <svg 
                    width="17" height="20" xmlns="http://www.w3.org/2000/svg"
                    className={`hover:fill-[#FC4747] ${navButton === 'bookmarked' ? "fill-white" : "fill-[#5A698F]"}`}
                    onClick={handleBookmarkedIconClick} 
                >
                    <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"/>
                </svg>
            </Link>
        </div>
        <div >
            <img 
                className="
                    border-white 
                    border-2 
                    rounded-full
                    h-8
                    cursor-pointer" 
                src={avatar} 
                alt="Profile image"
            />
        </div>

    </div>
  )
}

export default Navbar