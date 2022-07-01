const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
  return (
    <div onSubmit={handleSubmit}>
      <input 
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
    </div>
  )
}

export default AddItem