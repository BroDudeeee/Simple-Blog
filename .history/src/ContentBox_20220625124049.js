const ContentBox = ({input}) => {
  return (
    <div>
      <p style={{backgroundColor: input, "width": "50%" , "height": "50%"}}>{input}</p>
    </div>
  )
}

export default ContentBox