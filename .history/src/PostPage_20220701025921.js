import { useParams, Link } from 'react-router-dom'
const PostPage = ({ posts, handleDelete}) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)
  return (
    <main>
      <article>
        {post && 
          <div className='space-y-4'>
            <div>
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <p className='text-xs'>{post.datetime}</p>
            </div>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)} className="border"> Delete Post</button>
          </div>
        }
      </article>
    </main>
  )
}

export default PostPage