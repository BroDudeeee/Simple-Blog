const SearchItems = ({ search, setSearch }) => {
  return (
    <div>
      <input 
      type="text" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchItems