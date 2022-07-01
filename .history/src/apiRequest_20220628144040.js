const apiRequest = async (url = '', optoionsObj = null, errMsg) => {
  try {
    const res = await fetch(url, optoionsObj)
    if (!res.ok) throw Error("Please reload the app")
  } catch (error) {
    errMsg=error.message
  } finally {
    return errMsg
  }
}

export default apiRequest