const ContentBox = ({ input, isDark }) => {
  return (
    <div>
      {isDark ? (<p style={{"color": "white"}}>{input}</p>
      ) : <p style={{"color": "black"}}>{input}</p>}
    </div>
  )
}

export default ContentBox