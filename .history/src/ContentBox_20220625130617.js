const ContentBox = ({ input, isDark }) => {
  return (
    <div>
      {isDark ? <p style={{"color": "white", "backgroundColor": input}}>{input}</p> : <p style={{"color": "black", "backgroundColor": input}}>{input}</p>}
    </div>
  )
}

export default ContentBox