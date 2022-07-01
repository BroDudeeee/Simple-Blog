import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.id}</h1>
      <h2>{post.title}</h2>
      <Link to={`post/${post.id}`} />
    </div>
  )
}

export default Post