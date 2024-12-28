import { TOKEN_VALIDATED, USER_FETCHED } from './AuthActionsTypes'

const getToken = () => {
    
    const user = JSON.parse(localStorage.getItem(userKey))    
    if (user && user.token) {
        return user
    } else {
        return null
    }
}

const userKey = '_my_logged_user'
const INITIAL_STATE = {
    user: getToken(),
    validToken: false
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {

        case TOKEN_VALIDATED:            
            
            if (!action.payload) {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            } else {
                return { ...state, validToken: true }
            }                        

        case USER_FETCHED:

            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }

        default:
            return state
    }

}

export default AuthReducer