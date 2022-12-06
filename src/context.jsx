import React, { useContext, useEffect, useState } from 'react';
import entertainmentData from './data/entertainmentData';
const AppContext = React.createContext();



const ContextProvider = ({ children }) => {
    const [ data, setData ] = useState(entertainmentData);
    const movies = [
        {name: 1}, {name: 2}, {name:3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8}, {name: 9}, {name: 10}
    ];

    // useEffect(() => {
    //     console.log(entertainmentData)
    //     setData(entertainmentData)
    // }, []);

    return <AppContext.Provider value={{data, movies}}>
        {children}
    </AppContext.Provider>
}

//Setting up custom hook to improve readibilty when importing to components
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, ContextProvider }