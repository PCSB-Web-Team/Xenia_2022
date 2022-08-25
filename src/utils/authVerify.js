import store from "../store";
import { refreshUserState, setParticipations } from "../store/middleware";

export const AuthVerify = async ({ getUserDetails, getParticipations }) => {
    const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) || null

    if (getUserDetails || getParticipations) {
        if (getParticipations) {
            try {
                return await store.dispatch(setParticipations())
                    .unwrap().then(async () => (
                        await new Promise((resolve) => (
                            resolve(store.getState().user)))
                    ))
            } catch (error) {
                console.error(error)
                return Promise.reject(error)
            }
        }
        return await store.dispatch(refreshUserState())
            .unwrap().then(async () => {
                return new Promise((resolve) => (resolve(store.getState().user)))
            })
            .catch(error => {
                return Promise.reject(error)
            })
    }
    return token ? true : false
}