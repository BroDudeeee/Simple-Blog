const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        autoFocus
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add Items"
      />
    </form>
  )
}

export default AddItem