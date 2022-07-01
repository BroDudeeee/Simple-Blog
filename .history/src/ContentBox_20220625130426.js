const ContentBox = ({ input, isDark }) => {
  return (
    <div>
      {isDark ? <p style={{"backgroundColor": "white"}}></p> : <p style={{"backgroundColor": "black"}}></p>}
    </div>
  )
}

export default ContentBox