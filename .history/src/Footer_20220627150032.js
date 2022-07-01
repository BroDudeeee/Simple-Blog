const Footer = ({ items }) => {
  return (
    <div>
      <h3>{`${items.length ? items.length : "No"} ${items.length === 1 ? "item" : "items"}`}</h3>
    </div>
  )
}

export default Footer