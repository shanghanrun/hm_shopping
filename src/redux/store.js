import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
import {thunk} from 'redux-thunk'
import rootReducer from './reducers'; // ./reducers/index 인데,   폴더 이름만 해주면 그 안의 index.js파일을 자동으로 읽어온다.

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store;