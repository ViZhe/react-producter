
const fetchAction = (url, options = {}, type, dispatch) => {
  dispatch({type})

  return fetch(url, options)
    .then(res => dispatch({
      type: `${type}_SUCCESS`,
      payload: res.json()
    }))
    .catch(err => dispatch({
      type: `${type}_FAIL`,
      payload: err
    }))
}


export default fetchAction
