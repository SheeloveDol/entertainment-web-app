import searchIcon from "/assets/icon-search.svg";

const Search = ({ placeholder, handleChange }) => {
  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      event.target.blur();
    }
  };

  return (
    <div className=" flex gap-3 my-5">
      <div>
        <img src={searchIcon} alt="" />
      </div>
      <input
        placeholder={placeholder}
        className="bg-transparent w-[100%] focus:outline-none focus:border-b"
        onChange={handleChange}
        onKeyDown={handleSearchKeyDown}
      />
    </div>
  );
};

export default Search;


