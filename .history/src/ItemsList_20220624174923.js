import Item from "./LineItem"

const ItemsList = ({items , handleCheck, handleDelete}) => {
  return (
    <div>
      {items.map((item) => (
        <Item 
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default ItemsList