const Comments = ({comments}) => {
  return (
    <ul>
      {comments.map((comment) => {
        <li key={comment.id}>
          {comment.name}
        </li>
      })}
    </ul>
  )
}

export default Comments