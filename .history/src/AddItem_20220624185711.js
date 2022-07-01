const AddItem = ({ addItem, setAddItem}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
       type="text"
       value={addItem}
       onChange={(e) => setAddItem(e.target.value)}
      />
    </form>
  )
}

export default AddItem