const Header = ({ title }) => {
  return (
    <header className={`flex font-semibold py-4 bg-gray-200 shadow-sm shadow-gray-400 w-full top-0 sticky px-8 items-center text-2xl`}>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Blog"
}

export default Header