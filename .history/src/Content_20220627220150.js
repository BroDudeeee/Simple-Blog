import ItemList from "./ItemList"

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      {items.length ? (
        <div>
          <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        </div>
      ) : "No items here"}
    </div>
  )
}

export default Content