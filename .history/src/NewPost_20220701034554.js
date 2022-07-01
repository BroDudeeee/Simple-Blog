const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <form className="px-8" onSubmit={handleSubmit}>
      <input 
        type="text" 
        required
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <input 
        type="text" 
        required
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
      />
    </form>
  )
}

export default NewPost