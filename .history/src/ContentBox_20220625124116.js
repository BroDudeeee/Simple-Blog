const ContentBox = ({input}) => {
  return (
    <div>
      <p style={{backgroundColor: input, "width": "500px" , "height": "500px"}}>{input}</p>
    </div>
  )
}

export default ContentBox