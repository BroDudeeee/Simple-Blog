const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.id}</h1>
      <h2>{post.title}</h2>
    </div>
  )
}

export default Post