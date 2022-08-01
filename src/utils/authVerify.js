import Request from "../utils/requests";
import { useDispatch } from "react-redux/es/exports";
import { setUserReducer } from "../store/userSlice";
import { Navigate } from "react-router-dom";

export const AuthVerify = async ({ getCall, forward }) => {
    const token = await localStorage.getItem(process.env.REACT_APP_LOGIN_ID) || null
    const dispatchLoginReducer = useDispatch()

    if (token) {
        return getCall ? (await Request.getUserByToken(token).then((res) => {
            dispatchLoginReducer(setUserReducer(res.data.user)) //! Remain to be created at backend
            localStorage.setItem(process.env.REACT_APP_LOGIN_ID, res.data.token)
            return res.data.user
        }).catch(error => {
            console.error(error.message)
            return false
        })) : true
    } else {
        if (forward) {
            <Navigate to={'/auth'} />
        }
        return false
    }
}