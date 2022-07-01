import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <article>
      <Link to={`post/${post.id}`}>
        <h2>{post.title.slice(0, 7)}</h2>
      </Link>
      <hr />
      <p className="text-xs">{(post.body).length <=25 ? (post.body) : (post.body).slice(0, 25)}...</p>
    </article>
  )
}

export default Post