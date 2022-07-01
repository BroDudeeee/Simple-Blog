const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
  return (
    <div onSubmit={handleSubmit}>
      <input 
        type="text"
        value={newItem}
        readOnly
      />
    </div>
  )
}

export default AddItem