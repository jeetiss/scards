const defaultCardsState = []
export function cardsReducer (state, action) {
  switch (action.type) {
    case 'CARDS':
      return action.items
  }

  return state || defaultCardsState
}

const defaultLoaderState = false
export function loaderReducer (state, action) {
  switch (action.type) {
    case 'LOADING_START':
      return true
    case 'LOADING_FINISH':
      return false
  }

  return state || defaultLoaderState
}
