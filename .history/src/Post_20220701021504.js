import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <article>
      <Link to={`post/${post.id}`}>
      <label>{post.id}</label>
      <h2>{post.title}</h2>
      </Link>
    </article>
  )
}

export default Post