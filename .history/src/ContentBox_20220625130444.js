const ContentBox = ({ input, isDark }) => {
  return (
    <div>
      {isDark ? <p style={{"backgroundColor": "white"}}>{input}</p> : <p style={{"backgroundColor": "black"}}>{input}</p>}
    </div>
  )
}

export default ContentBox