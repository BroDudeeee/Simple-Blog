const ContentBox = ({input}) => {
  return (
    <div>
      <p style={{backgroundColor: input, "width": "200px" , "height": "200px"}}>{input}</p>
    </div>
  )
}

export default ContentBox