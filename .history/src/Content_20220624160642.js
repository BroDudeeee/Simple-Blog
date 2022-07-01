const Content = ({items, handleCheck}) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <label htmlFor="">{item.id}</label>
          <input 
            type="checkbox" 
            checked={item.checked}
            onChange={handleCheck}
          />
          <label htmlFor="">{item.name}</label>
        </div>
      ))}
    </div>
  )
}

export default Content