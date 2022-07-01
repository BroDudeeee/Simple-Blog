import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <article>
      <Link to={`post/${post.id}`}>
      <h2>{post.title}</h2>
      <p>{post.title}</p>
      </Link>
      <hr />
    </article>
  )
}

export default Post