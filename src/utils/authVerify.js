// import Request from "../utils/requests";
import { loginUser } from "../store/middleware";
import { useDispatch } from "react-redux/es/exports";

export const AuthVerify = async ({ getCall }) => {
    const token = localStorage.getItem(process.env.REACT_APP_LOGIN_ID) || null
    const dispatchLoginReducer = useDispatch()

    if (token) {
        return getCall ? (await Request.getUserByToken(token).then((res) => {
            dispatchLoginReducer(loginUser(res.data.user)) 
            //  Remain to be created at backend
            return res.data.user
        }).catch(error => {
            console.error(error.message)
            return false
        })) : true
    }
    return false
}