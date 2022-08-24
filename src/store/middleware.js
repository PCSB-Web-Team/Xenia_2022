import { createAsyncThunk } from "@reduxjs/toolkit";
import Request from "../api/requests";

const loginUser = createAsyncThunk(
  "user/loginUser",
  async (requestBody) => await Request.login(requestBody)
);

const registerUser = createAsyncThunk(
  "user/registerUser",
  async (requestBody) => await Request.signUp(requestBody)
);

const refreshUserState = createAsyncThunk(
  "user/refreshUserState",
  async () => await Request.refreshToken()
);

const setParticipations = createAsyncThunk(
  "user/setParticipations",
  async () => await Request.getUserParticipations()
);

const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async () => (new Promise((resolve) => resolve())));

export {
  loginUser,
  registerUser,
  refreshUserState,
  setParticipations,
  logoutUser,
};
