const ContentBox = ({ input, isDark }) => {
  return (
    <div>
      <p style={{"color": "white", "backgroundColor": input}}>{input}</p>
    </div>
  )
}

export default ContentBox