import Post from "./Post"

const Feed = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Feed