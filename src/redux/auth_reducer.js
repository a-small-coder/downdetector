const SET_IS_AUTORIZED_USER = 'SET_IS_AUTORIZED_USER'

const initialState = {
    is_authorized: false
}

const authReducer = (state=initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        
        case SET_IS_AUTORIZED_USER:
            stateCopy.is_authorized = action.is_authorized
            return stateCopy;
    
        default:
            return state;
    }
}
export const setIsAutorizedAC = (isAuthorized) => ({type: SET_IS_AUTORIZED_USER, is_authorized: isAuthorized})
export default authReducer