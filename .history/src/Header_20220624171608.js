const Header = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

Header.defaultValue = {
  title: "list"
}
export default Header