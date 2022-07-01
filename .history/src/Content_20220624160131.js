const Content = ({items}) => {
  return (
    <div>
      {items.map((item) => {
        return (
        <div key={item.id}>
          <label htmlFor="">{item.id}</label>
          <input 
            type="checkbox" 
            checked={item.checked}
          />
          <label htmlFor="">{item.name}</label>
        </div>
        )
      })}
    </div>
  )
}

export default Content