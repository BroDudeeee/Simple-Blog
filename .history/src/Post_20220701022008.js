import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <article>
      <Link to={`post/${post.id}`}>
      <h2>{post.title.slice(0, 7)}</h2>
      </Link>
      <hr />
      {(post.body).length <= 25 ? <p>{post.body}</p> : <p>{post.body.slice(0, 25)}</p>}
    </article>
  )
}

export default Post