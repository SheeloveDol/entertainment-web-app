import searchIcon from '../assets/icon-search.svg'


const Search = ({placeholder}) => {
  return (
    <div className=' flex gap-3 my-5'>
      <div className=''>
        <img src={searchIcon} alt="" />
      </div>
      <input 
        placeholder={placeholder}
        className="bg-transparent w-[100%] focus:border-none"
      >
      
      </input>
    </div>
  )
}

export default Search