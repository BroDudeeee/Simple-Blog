const ContentBox = ({ input, isDark }) => {
  return (
    <div>
      <p style={`${isDark} ? ${input = 0} : ${input = 1}`}>{input}</p>
    </div>
  )
}

export default ContentBox