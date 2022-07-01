const AddItem = ({ addItem}) => {
  return (
    <form>
      <input
       type="text"
       value={addItem}
       onChange
      />
    </form>
  )
}

export default AddItem