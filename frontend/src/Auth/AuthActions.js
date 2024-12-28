import axios from "axios"
import { toastr } from "react-redux-toastr"

import Constants from "../Constans"
import { TOKEN_VALIDATED, USER_FETCHED } from "./AuthActionsTypes"

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(res => {
                dispatch([
                    { type: USER_FETCHED, payload: res.data },
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error)
                )
            })
    }
}

function login(values) {
    return submit(values, `${Constants.SERVICE_URL}/login`)
}

function logout() {
    return { type: TOKEN_VALIDATED, payload: false }
}

function signup(values) {
    return submit(values, `${Constants.SERVICE_URL}/signup`)
}

function validateToken(token) {
    return dispatch => {
        
        if (!token) dispatch({ type: TOKEN_VALIDATED, payload: false })
        
        axios.post(`${Constants.SERVICE_URL}/validateToken`, { token })
            .then(res => {
                dispatch({ type: TOKEN_VALIDATED, payload: res.data.valid })
            })
            .catch(() => dispatch({ type: TOKEN_VALIDATED, payload: false }))
    }
}

export { login, logout, signup, validateToken }