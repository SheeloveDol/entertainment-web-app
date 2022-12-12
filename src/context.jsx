import React, { useContext, useEffect, useState } from 'react';
import entertainmentData from './data/entertainmentData';
const AppContext = React.createContext();



const ContextProvider = ({ children }) => {
    const newData = Object.values(entertainmentData)
    const [ data, setData ] = useState(newData);
    const [ navButton, setNavButton ] = useState("");
    const [ searchField, setSearchField ] = useState('')

    const handleSearchFieldChange = e => {
        console.log(e.target.value)
        setSearchField(e.target.value);
      }

    const filteredSearchDataForHomePage = data.filter((item) => item.title.toLowerCase().includes(searchField.toLowerCase())) 
    
    const filteredSearchForMoviesPage = data.filter((item) => item.category === "Movie" && item.title.toLowerCase().includes(searchField.toLowerCase()))


    const filteredSearchForTVSeriesPage = data.filter((item) => item.category === "TV Series" && item.title.toLowerCase().includes(searchField.toLowerCase()))

    const filteredSearchBookmarkedMovies = data.filter((item) => (
        (item.isBookmarked && item.category === 'Movie') && item.title.toLowerCase().includes(searchField.toLowerCase())
    ));

    const filteredSearchBookmarkedTVSeries = data.filter((item) => (
        (item.isBookmarked && item.category === 'TV Series') && item.title.toLowerCase().includes(searchField.toLowerCase())
    ));
    
    const handleHomeIconClick = () => {
        setNavButton('home');
    }

    const handleMoviesIconClick = () => {
        setNavButton('movies');
    }

    const handleTVSeriesIconClick = () => {
        setNavButton('tvSeries');
    }

    const handleBookmarkedIconClick = () => {
        setNavButton('bookmarked');
    }

    const handleBookmarkClick = (e) => {
        // const currentMovieIndex = data.findIndex((movie, index) => movie.index === id);

        console.log(e.target.value)

        
        // const updatedMovie = {...data[currentMovieIndex], isBookmarked: (isBookmarked ? false : true)}

        // const newMovieInfo = [...data];
        // newMovieInfo[currentMovieIndex] = updatedMovie;
        // setData(newMovieInfo)
    }
    

    return <AppContext.Provider value={{
        data, 
        navButton,
        filteredSearchForMoviesPage,
        filteredSearchDataForHomePage,
        filteredSearchForTVSeriesPage, 
        filteredSearchBookmarkedMovies,
        filteredSearchBookmarkedTVSeries,
        handleBookmarkClick,
        handleHomeIconClick, 
        handleMoviesIconClick,
        handleSearchFieldChange,
        handleTVSeriesIconClick,
        handleBookmarkedIconClick, 
        
        }}
    >
        {children}
    </AppContext.Provider>
}

//Setting up custom hook to improve readibilty when exporting to components
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, ContextProvider }