import { Link } from "react-router-dom"

const Nav = ({ search, setSearch }) => {
  return (
    <form className="px-8 py-4 mb-8 border">
      <input 
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search posts"
      />
      <Link to="/">Home</Link>
      <Link to="/post">Posts</Link>
      <Link to="about">About</Link>
    </form>
  )
}

export default Nav