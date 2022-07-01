const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <input 
            type="checkbox" 
            checked={item.checked}
            onChange={()=>handleCheck(item.id)}
          />
          <label htmlFor="">{item.name}</label>
          <button onClick={() => handleDelete(item.id)}>-</button>
        </div>
      ))}
    </div>
  )
}

export default Content