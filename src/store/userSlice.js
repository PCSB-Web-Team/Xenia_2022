import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, logoutUser } from "./middleware";

const initialState = {
    loading: false,
    loggedIn: false,
    userDetails: {
        "name": '',
        "mobile": ''
    },
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => ({
            ...state,
            [state.loggedIn]: false,
            [state.loading]: true
        }))
        builder.addCase(loginUser.fulfilled, (state, { payload: { data } }) => {
            if (data.status) localStorage.setItem(process.env.REACT_APP_LOGIN_ID, data.data._id) //! temporarily setting token as mongo _id, because user.token is not getting sent in response object
            return {
                loading: false,
                userDetails: {
                    "name": data.data.name || null,
                    "mobile": data.data.mobile || null
                },
                loggedIn: true,
                error: data.error || null
            }
        })
        builder.addCase(loginUser.rejected, state => {
            localStorage.removeItem(process.env.REACT_APP_LOGIN_ID)
            return {
                state: {},
                [state.loggedIn]: false,
                [state.loading]: false
            }
        })
        builder.addCase(registerUser.pending, state => ({
            ...state,
            [state.loggedIn]: false,
            [state.loading]: true
        }))
        builder.addCase(registerUser.fulfilled, (state, { payload: { data } }) => {
            if (data.status) localStorage.setItem(process.env.REACT_APP_LOGIN_ID, data.data._id) //! temporarily setting token as mongo _id, because user.token is not getting sent in response object
            return {
                loading: false,
                userDetails: {
                    "name": data.data.name || null,
                    "mobile": data.data.mobile || null
                },
                loggedIn: true,
                error: data.error || null
            }
        })
        builder.addCase(registerUser.rejected, state => {
            localStorage.removeItem(process.env.REACT_APP_LOGIN_ID)
            return {
                state: {},
                [state.loggedIn]: false,
                [state.loading]: false
            }
        })
        builder.addCase(logoutUser.fulfilled, state => ({ ...initialState }))
    }
})

export const userSelector = state => state.user;