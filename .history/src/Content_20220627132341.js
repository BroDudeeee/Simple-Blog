const Content = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return(
          <div key={item.id}>
            <input 
              type="checkbox"
              checked={item.checked}
              onChange
            />
            {item.item}
          </div>
        )
      })}
    </div>
  )
}

export default Content