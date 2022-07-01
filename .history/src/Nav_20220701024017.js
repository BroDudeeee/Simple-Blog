import { Link } from "react-router-dom"

const Nav = ({ search, setSearch }) => {
  return (
    <form className="flex flex-col bg-black text-white mb-4 sticky top-16">
      <input 
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search posts"
        className="flex-1 outline-none text-gray-600 p-2 items-center bg-white border-y border-black"
      />
      <div className="space-x-6 flex justify-evenly items-center">
        <Link to="/" className="hover:bg-white hover:text-black px-4 py-3">Home</Link>
        <Link to="/post" className="hover:bg-white hover:text-black px-4 py-3">Posts</Link>
        <Link to="about" className="hover:bg-white hover:text-black px-4 py-3">About</Link>
      </div>
    </form>
  )
}

export default Nav