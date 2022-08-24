import { LOGIN_FORM, LOGOUT_FORM, REGISTER_FORM } from "../constant/authType"


export const loginForm = (data) => {
    return {
        type: LOGIN_FORM,
        payload: data
    }
}

export const registerForm = (data) => {
    // console.log(data, "action data")
    return {
        type: REGISTER_FORM,
        payload: data
    }
}
export const logoutForm = () => {
    // console.log(data, "action data")
    return {
        type: LOGOUT_FORM,
    }
}