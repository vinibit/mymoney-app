import { TOKEN_VALIDATED, USER_FETCHED } from './AuthActionsTypes'

const getToken = () => {
    const user = JSON.parse(localStorage.getItem(userKey))
    if (user && user.token) {
        return user.token
    } else {
        return null
    }
}


const userKey = '_my_logged_user'
const INITIAL_STATE = {
    user: getToken(),
    validToken: false
}

const authReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case TOKEN_VALIDATED:            
            const stateCopy = { ...state }
            if (!action.payload) {
                localStorage.removeItem(userKey)
                stateCopy.validToken = false
                stateCopy.user = null
            } else {
                stateCopy.validToken = true                
            }            
            return stateCopy

        case USER_FETCHED:
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }

        default:
            return state
    }

}

export default authReducer