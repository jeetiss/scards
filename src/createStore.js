import {
  createStore as cs,
  applyMiddleware,
  combineReducers
} from 'redux'
import {
  cardsReducer as items,
  loaderReducer as loading
} from './reducers/reducer'
import ReduxThunk from 'redux-thunk'

export default function createStore () {
  return cs(
    combineReducers({items, loading}),
    applyMiddleware(ReduxThunk)
  )
}
