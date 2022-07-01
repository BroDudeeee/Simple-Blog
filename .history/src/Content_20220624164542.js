const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <ul style={grid}>
      {items.map((item) => (
        <div key={item.id}>
          <label htmlFor="">{item.id}</label>
          <input 
            type="checkbox" 
            checked={item.checked}
            onChange={()=>handleCheck(item.id)}
          />
          <label htmlFor="">{item.name}</label>
          <button onClick={() => handleDelete(item.id)}>-</button>
        </div>
      ))}
    </ul>
  )
}

export default Content