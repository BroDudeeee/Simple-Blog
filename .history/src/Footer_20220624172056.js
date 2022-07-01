const Footer = ({items}) => {
  return (
    <div>
      <h3>
        {`${!items.length ? "No" : items.length} items`}
      </h3>
    </div>
  )
}

export default Footer