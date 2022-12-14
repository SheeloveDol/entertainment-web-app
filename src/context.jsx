import React, { useContext, useEffect, useState } from 'react';
import entertainmentData from './data/entertainmentData';
const AppContext = React.createContext();



const ContextProvider = ({ children }) => {
    const newData = Object.values(entertainmentData)
    const [ data, setData ] = useState(newData);
    const [ navButton, setNavButton ] = useState("home");
    const [ searchField, setSearchField ] = useState('');

    useEffect(() => {
        setSearchField('');
    },[navButton])


    
    

    const filteredSearchDataForHomePage = data.filter((item) => 
        searchField === '' ? item : item.title.toLowerCase().includes(searchField.toLowerCase())
    );
    
    const trendingTitles = filteredSearchDataForHomePage.filter((item) => item.isTrending );

    const filteredSearchForMoviesPage = data.filter((item) => item.category === "Movie" && item.title.toLowerCase().includes(searchField.toLowerCase()));


    const filteredSearchForTVSeriesPage = data.filter((item) => item.category === "TV Series" && item.title.toLowerCase().includes(searchField.toLowerCase()));

    const filteredSearchBookmarkedMovies = data.filter((item) => (
        (item.isBookmarked && item.category === 'Movie') && item.title.toLowerCase().includes(searchField.toLowerCase())
    ));

    const filteredSearchBookmarkedTVSeries = data.filter((item) => (
        (item.isBookmarked && item.category === 'TV Series') && item.title.toLowerCase().includes(searchField.toLowerCase())
    ));

    

    const handleSearchFieldChange = e => {
        setSearchField(e.target.value);
    };
    
    const handleHomeIconClick = () => {
        setNavButton('home');
    };

    const handleMoviesIconClick = () => {
        setNavButton('movies');
    };

    const handleTVSeriesIconClick = () => {
        setNavButton('tvSeries');
    };

    const handleBookmarkedIconClick = () => {
        setNavButton('bookmarked');
    };

    const handleBookmarkClick = (title) => {
        setData(
            data.map((item) => {
                if (item.title === title) {
                    return {...item, isBookmarked: !item.isBookmarked }
                }
                return item
            })
        )
    }
    
    return <AppContext.Provider value={{ 
        navButton,
        trendingTitles,
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