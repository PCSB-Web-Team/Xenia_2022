import { createAsyncThunk } from "@reduxjs/toolkit";
import Request from "../utils/requests";

const loginUser = createAsyncThunk('user/loginUser', async requestBody => {
    return await Request.login(requestBody)
})

const registerUser = createAsyncThunk('user/registerUser', async requestBody => {
    return await Request.signUp(requestBody)
})

const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    localStorage.removeItem(process.env.REACT_APP_LOGIN_ID)
})

export { loginUser, registerUser, logoutUser };