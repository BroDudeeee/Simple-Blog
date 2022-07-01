const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
  return (
    <div onSubmit={handleSubmit}>
      <input 
        type="text"
        value={newItem}
      />
    </div>
  )
}

export default AddItem