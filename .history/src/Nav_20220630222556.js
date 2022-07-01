import { Link } from "react-router-dom"

const Nav = ({ search, setSearch }) => {
  return (
    <form className="flex flex-between px-8 py-4 mb-8 border space-x-8 items-center bg-black text-white rounded-lg">
      <input 
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search posts"
        className="flex-1 outline-none text-gray-600 p-2 items-center rounded-md bg-white"
      />
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/post">Posts</Link>
        <Link to="about">About</Link>
      </div>
    </form>
  )
}

export default Nav