import { Link } from "react-router-dom"

const Nav = ({ search, setSearch }) => {
  return (
    <form className="flex flex-col bg-black text-white">
      <input 
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search posts"
        className="flex-1 outline-none text-gray-600 p-2 items-center bg-white hover:ring-1 ring-gray-300 border border-black"
      />
      <div className="space-x-6 flex justify-evenly items-center">
        <Link to="/" className="hover:bg-white hover:text-black p-2">Home</Link>
        <Link to="/post">Posts</Link>
        <Link to="about">About</Link>
      </div>
    </form>
  )
}

export default Nav