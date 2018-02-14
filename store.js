import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  shows: []
}

export const actionTypes = {
  ADD: 'ADD',
}

export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return ({ shows: state.shows.indexOf(JSON.stringify(action.obj)) === -1 ? state.shows.concat(JSON.stringify(action.obj)) : state.shows })
    default: return state
  }
}

export const addShow = (obj) => dispatch => {
  return dispatch({ obj: obj, type: actionTypes.ADD })
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
