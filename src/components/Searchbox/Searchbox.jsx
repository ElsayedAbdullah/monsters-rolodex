
const Searchbox = ({placeholder, handleSearch}) => {
  return (
    <div>
      <input
          type="search"
          placeholder={placeholder}
          onChange={handleSearch}
        />
    </div>
  )
}

export default Searchbox