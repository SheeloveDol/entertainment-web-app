import React, { useContext, useEffect, useState } from 'react';
import entertainmentData from './data/entertainmentData';
const AppContext = React.createContext();



const ContextProvider = ({ children }) => {
    const newData = Object.values(entertainmentData)
    const [ data, setData ] = useState(newData);
    const [ navButton, setNavButton ] = useState("");
    
    const moviesOnlyData = data.filter((item) => item.category === "Movie");


    const tvSeriesOnlyData = data.filter((item) => item.category === "TV Series");

    const bookmarkedMovies = data.filter((item) => (
        (item.isBookmarked && item.category === 'Movie')
    ));

    const bookmarkedTVSeries = data.filter((item) => (
        (item.isBookmarked && item.category === 'TV Series')
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
        moviesOnlyData, 
        tvSeriesOnlyData,
        bookmarkedMovies,
        bookmarkedTVSeries,
        handleBookmarkClick,
        handleHomeIconClick, 
        handleMoviesIconClick,
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