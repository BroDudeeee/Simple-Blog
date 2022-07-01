import { useParams, Link } from 'react-router-dom'
const PostPage = ({ posts, handleDelete}) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)
  return (
    <main>
      <article>
        {post && 
          <div>
            <h2 className='text-xl font-bold'>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
          </div>
        }
      </article>
    </main>
  )
}

export default PostPage