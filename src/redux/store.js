import {combineReducers, createStore} from 'redux';
import authReducer from './auth_reducer';

let reducers = combineReducers({
    auth: authReducer
})

let store = createStore(reducers)

export default store