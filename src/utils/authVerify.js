import store from "../store";
import { refreshUserState, setParticipations } from "../store/middleware";

export const AuthVerify = async ({ getUserDetails, getParticipations }) => {
  const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) || null;

  if (getUserDetails || getParticipations) {
    await store
      .dispatch(refreshUserState())
      .unwrap()
      .then()
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
    if (getParticipations) {
      try {
        console.log("getting participations");
        await store.dispatch(setParticipations());
      } catch (error) {
        console.error(error);
      }
    }
  }
  return token ? true : false;
};
