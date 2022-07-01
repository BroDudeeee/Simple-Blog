const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <form className="px-8 flex flex-col space-y-2" onSubmit={handleSubmit}>
      <label htmlFor="">Title:</label>
      <input 
        type="text" 
        required
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        className='border'
      />
      <label htmlFor="">Post:</label>
      <textarea 
        type="text" 
        required
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
        className='border'
      />
      <button type='submit' className="border-2 bg-gray-200 border-gray-400">Submit</button>
    </form>
  )
}

export default NewPost