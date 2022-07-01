const Content = ({items, handleCheck}) => {
  return (
    <ul>
      {items.map((item) => (
        <div key={item.id}>
          <label htmlFor="">{item.id}</label>
          <input 
            type="checkbox" 
            checked={item.checked}
            onChange={()=>handleCheck(item.id)}
          />
          <label htmlFor="">{item.name}</label>
        </div>
      ))}
    </ul>
  )
}

export default Content