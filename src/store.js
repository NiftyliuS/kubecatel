import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = configureStore({
  reducer: changeState,
  preloadedState: initialState,
})
export default store
