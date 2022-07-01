const Comments = ({comments}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {JSON.stringify(comment)}
        </li>
      ))}
    </ul>
    </form>
  )
}

export default Comments