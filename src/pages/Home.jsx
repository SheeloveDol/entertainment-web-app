import Card from "../components/Card"
import CardList from "../components/CardList";
import Search from "../components/Search"
import { useGlobalContext } from "../context";
import { useState } from "react";

const Home = () => {

  // const movies = useGlobalContext()
  const { filteredSearchDataForHomePage, handleSearchFieldChange } = useGlobalContext();
  const [ searchField, setSearchField ] = useState('');
  
  // const filteredSearchDataForHomePage = data.filter((item) => item.title.toLowerCase().includes(searchField.toLowerCase()))  

  

  return (
    <div>
      <Search 
        placeholder="Search for movies or TV series"
        handleChange={handleSearchFieldChange}  
      />
      <h2 className="text-lg pb-4">Recomended for you</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
        {
          filteredSearchDataForHomePage.map((item, index) => (
            
            <Card 
              key={index}
              id={index}
              item={item} 
            />
          ))
          
        }
      </div>
    </div>
  )
}

export default Home
