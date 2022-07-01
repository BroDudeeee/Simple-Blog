const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
       type="text"
       value={addItem}
       onChange={(e) => setNewItem(e.target.value)}
      />
    </form>
  )
}

export default AddItem