const LineItems = ({ item, handleCheck, handleDelete }) => {
  return (
    <div>
      <input 
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label>{item.item}</label>
      <button onClick={() => handleDelete(item.id)}>-</button>
    </div>
  )
}

export default LineItems