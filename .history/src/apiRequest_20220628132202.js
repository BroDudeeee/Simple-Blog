const apiRequest = async (url = '', opitonsObj = null, errMsg) => {
  try {
    const res = await fetch(url, opitonsObj)
    if(res.ok) throw Error("Please reload the app")
  } catch (error) {
    errMsg=error.message
  } finally {
    return errMsg
  }
}

export default apiRequest