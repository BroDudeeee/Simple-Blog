const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      {items.length ? (
        <div>
          {items.map((item) => {
            return(
              <div key={item.id}>
                <input 
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <label>{item.item}</label>
                <button onClick={() => handleDelete(item.id)}>-</button>
              </div>
            )
          })}
        </div>
      ) : "No items here"}
    </div>
  )
}

export default Content