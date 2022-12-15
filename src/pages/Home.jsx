import Card from "../components/Card"
import TrendingCard from "../components/TrendingCard";
import CardList from "../components/CardList";
import Search from "../components/Search"
import { useGlobalContext } from "../context";
import { useState } from "react";

const Home = () => {

  // const movies = useGlobalContext()
  const { filteredSearchDataForHomePage, handleSearchFieldChange, trendingTitles } = useGlobalContext();
  
  
  // const filteredSearchDataForHomePage = data.filter((item) => item.title.toLowerCase().includes(searchField.toLowerCase()))  

  

  return (
    <div className="lg:ml-28 ">
      <Search 
        placeholder="Search for movies or TV series"
        handleChange={handleSearchFieldChange}  
      />
      <div className="overflow-auto">
        <h2 className="text-lg pb-4">Trending</h2>
        <div className="flex gap-5 h-[12rem]   ">
          {
            trendingTitles.map((item, index) => (
              <TrendingCard 
                key={index}
                item={item}
              />
            ))
          }
        </div>
      </div>

      <h2 className="text-lg pb-4 pt-6">Recomended for you</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-5 justify-center min-h-screen ">
        {
          filteredSearchDataForHomePage.length === 0 ? "No results, please try again..." :
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
