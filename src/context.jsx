import React, { useContext, useEffect, useState } from 'react';
import entertainmentData from './data/entertainmentData';
const AppContext = React.createContext();



const ContextProvider = ({ children }) => {
    const [ data, setData ] = useState(entertainmentData);
    const [ navButton, setNavButton ] = useState("home");
    

    
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

    const handleBookmarkClick = (id) => {
        
    }
    

    return <AppContext.Provider value={{
        data, 
        navButton, 
        handleHomeIconClick, 
        handleMoviesIconClick,
        handleTVSeriesIconClick,
        handleBookmarkedIconClick, 
        handleBookmarkClick,
        }}
    >
        {children}
    </AppContext.Provider>
}

//Setting up custom hook to improve readibilty when importing to components
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, ContextProvider }