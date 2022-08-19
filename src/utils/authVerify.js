import store from "../store";
import { refreshUserState, setParticipations } from "../store/middleware";

export const AuthVerify = async ({ getUserDetails, getParticipations }) => {
    const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) || null

    if (getUserDetails || getParticipations) {
        store.dispatch(refreshUserState())
            .unwrap().then()
            .catch(error => {
                console.error(error)
                return Promise.reject(error)
            })
        if (getParticipations) {
            try {
                return store.dispatch(setParticipations())
                    .unwrap().then(() => (
                        store.getState().user
                    ))
            } catch (error) {
                console.error(error)
                return Promise.reject(error)
            }
        }
    }
    return token ? true : false
}