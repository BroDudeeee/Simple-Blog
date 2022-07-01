import { useParams, Link } from 'react-router-dom'
const PostPage = ({ posts, handleDelete}) => {
  const { id } = useParams()
  const path = posts.find((post) => post.id.toString() === id)
  return (
    <div>PostPage</div>
  )
}

export default PostPage