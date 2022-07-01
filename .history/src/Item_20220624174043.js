const Item = ({item, handleCheck, handleDelete}) => {
  return (
    <div key={item.id}>
      <input 
        type="checkbox" 
        checked={item.checked}
        onChange={()=>handleCheck(item.id)}
      />
      <label htmlFor="">{item.name}</label>
      <button onClick={() => handleDelete(item.id)}>-</button>
    </div>
  )
}

export default Item