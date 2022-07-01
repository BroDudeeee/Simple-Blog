import Post from "./Post"

const Feed = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  )
}

export default Feed