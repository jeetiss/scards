const serverUrl = process.env.SERVER || 'http://localhost:5000'
const { fetch } = window
const startLoading = () => ({type: 'LOADING_START'})
const finishLoading = () => ({type: 'LOADING_FINISH'})
const cards = items => ({type: 'CARDS', items})
const error = err => ({type: 'ERROR', error: err})

export const fetchCards = () => (dispatch) => {
  dispatch(startLoading())

  return fetch(serverUrl)
    .then(body => body.json())
    .then(items => {
      dispatch(cards(items))
      dispatch(finishLoading())
    })
    .catch(err => dispatch(error(err)))
}
