const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <form className="px-8" onSubmit={handleSubmit}>
      <label htmlFor="">Title:</label>
      <input 
        type="text" 
        required
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        className='border'
      />
      <label htmlFor="">Post</label>
      <input 
        type="text" 
        required
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default NewPost