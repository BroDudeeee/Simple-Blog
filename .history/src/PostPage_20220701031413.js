import { useParams, Link } from 'react-router-dom'
const PostPage = ({ posts, handleDelete}) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)
  return (
    <main className='px-8'>
      <article>
        {post && 
          <div className='space-y-4'>
            <div>
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <p className='text-xs'>{post.datetime}</p>
            </div>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)} className="border bg-red-600 px-3 py-2 text-white rounded-md active:scale-95 transition transform duration-150 ease-in-out"> Delete Post</button>
          </div>
        }
        {!post && 
          <div className="space-y-4">
            <h2 className='text-xl font-bold'>Post Not Found</h2>
            <p>Well that's dissapointing</p>
            <Link to="/" className='border bg-blue-500 px-3 py-2 rounded-md'>Visit our Homepage</Link>
          </div>
        }
      </article>
    </main>
  )
}

export default PostPage