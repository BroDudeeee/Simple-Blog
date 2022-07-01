const Content = ({ items, handleCheck }) => {
  return (
    <div>
      {items.map((item) => {
        return(
          <div key={item.id}>
            <input 
              type="checkbox"
              checked={item.checked}
              onChange={(id) => handleCheck(item.id)}
            />
            {item.item}
          </div>
        )
      })}
    </div>
  )
}

export default Content