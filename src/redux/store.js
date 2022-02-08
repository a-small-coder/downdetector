import {combineReducers, createStore} from 'redux';
import authReducer from './auth_reducer';
import companiesReducer from './companies_reducer'

let reducers = combineReducers({
    auth: authReducer,
    companies: companiesReducer
})

let store = createStore(reducers)

export default store