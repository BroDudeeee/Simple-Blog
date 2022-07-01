import { Link } from "react-router-dom"

const Nav = ({ search, setSearch }) => {
  return (
    <form className="px-8 mb-8">
      <input 
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search posts"
      />
      <Link to="/">Home</Link>
      <Link to="posts">Posts</Link>
    </form>
  )
}

export default Nav