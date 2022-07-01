const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
  return (
    <div onSubmit={handleSubmit}>
      <input 
        type="text"
      />
    </div>
  )
}

export default AddItem