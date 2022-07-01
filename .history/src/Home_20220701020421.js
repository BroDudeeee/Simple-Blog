import Feed from "./Feed"

const Home = ({ posts }) => {
  return (
    <main className="px-8">
      {posts.length ? (
        <Feed />
      ) : (<p className="text-center text-2xl">No posts yet</p>)}
    </main>
  )
}

export default Home