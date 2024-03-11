import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
import {thunk} from 'redux-thunk'
import productReducer from './productReducer'

let store = createStore(productReducer, applyMiddleware(thunk))

export default store;