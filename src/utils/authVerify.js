import Request from "../api/requests";
import { loginUser } from "../store/middleware";
import store from "../store"

export const AuthVerify = async ({ getCall }) => {
    const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) || null

    if (token) {
        return getCall ? (await Request.getUserByToken().then((res) => {
            store.dispatch(loginUser(res.data.user)) //! Remain to be created at backend
            return res.data.user
        }).catch(error => {
            console.error(error)
            return false
        })) : true
    }
    return false
}