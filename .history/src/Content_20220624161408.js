const Content = ({items, handleCheck}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label htmlFor="">{item.id}</label>
          <input 
            type="checkbox" 
            checked={item.checked}
            onChange={()=>handleCheck(item.id)}
          />
          <label htmlFor="">{item.name}</label>
        </li>
      ))}
    </ul>
  )
}

export default Content