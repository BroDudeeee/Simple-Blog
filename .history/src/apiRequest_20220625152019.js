const apiReques = async (url = '', optionsObj = null, errMsg = null) => {
  try {
    const res = await (url, optionsObj)
    if (!res.ok) throw Error("Please reload the app")
  } catch (error) {
    errMsg = error.message
  } finally {
    return errMsg
  }
}