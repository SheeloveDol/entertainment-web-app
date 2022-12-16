import Card from "../components/Card";
import Search from "../components/Search";
import { useGlobalContext } from "../context";

const TVseries = () => {
  const { filteredSearchForTVSeriesPage, handleSearchFieldChange } =
    useGlobalContext();

  return (
    <div className="lg:ml-28">
      <Search
        placeholder="Search for TV series"
        handleChange={handleSearchFieldChange}
      />
      <h2 className="text-lg mb-4">TV Series</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-center ">
        {filteredSearchForTVSeriesPage.length === 0
          ? "No results, please try again..."
          : filteredSearchForTVSeriesPage.map((item, i) => (
              <Card key={i} item={item} />
            ))}
      </div>
    </div>
  );
};

export default TVseries;
