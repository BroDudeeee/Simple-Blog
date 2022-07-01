import LineItems from "./LineItems"

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      {items.map((item) => {
        return(
          <LineItems
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )
      })}
    </div>
  )
}

export default ItemList