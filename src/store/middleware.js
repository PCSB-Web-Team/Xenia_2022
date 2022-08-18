import { createAsyncThunk } from "@reduxjs/toolkit";
import Request from "../api/requests";

const loginUser = createAsyncThunk('user/loginUser', async requestBody => {
    return await Request.login(requestBody)
})

const registerUser = createAsyncThunk('user/registerUser', async requestBody => {
    return await Request.signUp(requestBody)
})

const refreshUserState = createAsyncThunk('user/refreshUserState', async () => {
    return await Request.getUserByToken()
})

const setParticipations = createAsyncThunk('user/setParticipations', async () => {
    return await Request.getUserParticipations()
})

const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME)
})

export { loginUser, registerUser, refreshUserState, setParticipations, logoutUser };