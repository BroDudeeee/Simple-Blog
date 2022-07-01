const Header = ({ title }) => {
  return (
    <div>
      <h1 style={{color: 'blue'}}>{title}</h1>
    </div>
  )

  
}
Header.defaultProps = {
  title: "List"
}

export default Header