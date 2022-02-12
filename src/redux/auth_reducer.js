const SET_IS_AUTORIZED_USER = 'SET_IS_AUTORIZED_USER'
const SET_USER_TOKEN = 'SET_USER_TOKEN'
const SET_USER_EMAIL = 'SET_USER_EMAIL'

const initialState = {
    userEmail: '',
    token: '',
    is_authorized: false
}

const authReducer = (state=initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        
        case SET_IS_AUTORIZED_USER:
            stateCopy.is_authorized = action.is_authorized
            return stateCopy;
        
        case SET_USER_TOKEN:
            stateCopy.token = action.token
            return stateCopy;
        
        case SET_USER_EMAIL:
            stateCopy.userEmail = action.email
            return stateCopy;
    
        default:
            return state;
    }
}
export const setIsAutorizedAC = (isAuthorized) => ({type: SET_IS_AUTORIZED_USER, is_authorized: isAuthorized})
export const setUserTokenAC = (token) => ({type: SET_USER_TOKEN, token: token})
export const setUserEmailAC = (email) => ({type: SET_USER_EMAIL, email: email})
export default authReducer