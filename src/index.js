import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import createStore from './createStore'
import { fetchCards } from './actions'

const mountPoint = document.getElementById('root')
const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountPoint
)

store.dispatch(fetchCards())
