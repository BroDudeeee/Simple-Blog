import Item from "./Item"

const ItemsList = ({items , handleCheck, handleDelete}) => {
  return (
    <div>
      {items.map((item) => (
        <Item 
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default ItemsList