import ItemsList from "./ItemsList"

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <div>
      {items.length ? (
        <ItemsList 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : "There's no items here"}
    </div>
      
  )
}

export default Content