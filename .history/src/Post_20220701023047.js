import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <article>
      <Link to={`post/${post.id}`}>
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p>{post.datetime}</p>
      </Link>
      <p className="text-sm">{(post.body).length <=25 ? (post.body) : (post.body).slice(0, 25)}...</p>
      <hr />
    </article>
  )
}

export default Post