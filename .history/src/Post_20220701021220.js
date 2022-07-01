import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <div>
      <Link to={`post/${post.id}`}>
      <h1>{post.id}</h1>
      <h2>{post.title}</h2>
      </Link>
    </div>
  )
}

export default Post