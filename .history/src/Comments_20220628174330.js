const Comments = ({comments}) => {
  return (
    <form onSubmit={e.preventDefault()}>
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.name}
        </li>
      ))}
    </ul>
    </form>
  )
}

export default Comments