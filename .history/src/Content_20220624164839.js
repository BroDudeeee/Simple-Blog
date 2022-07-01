const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <ol>
      {items.map((item) => (
        <li key={item.id}>
          <input 
            type="checkbox" 
            checked={item.checked}
            onChange={()=>handleCheck(item.id)}
          />
          <label htmlFor="">{item.name}</label>
          <button onClick={() => handleDelete(item.id)}>-</button>
        </li>
      ))}
    </ol>
  )
}

export default Content