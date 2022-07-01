const Content = ({ items, handleCheck, handleDelete }) => {
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
            <label htmlFor="">{item.item}</label>
            <button onClick={(id) => handleDelete(item.id)}> - </button>
          </div>
        )
      })}
    </div>
  )
}

export default Content