const SearchItems = ({ search, setSearch }) => {
  return (
    <form onSubmit={e.preventDefault()}>
      <input 
        type="text"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchItems