import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, refreshUserState, setParticipations, logoutUser } from "./middleware";

const initialState = {
    loading: false,
    loggedIn: false,
    userDetails: {
        "name": '',
        "mobile": ''
    },
    participations: [],
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => ({
            ...state,
            loggedIn: false,
            loading: true
        }))
        builder.addCase(loginUser.fulfilled, (state, { payload: { data } }) => {
            if (data.status) {
                localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, data.data?.token)
                return {
                    ...state,
                    userDetails: {
                        "name": data.data?.name,
                        "mobile": data.data?.mobile || null
                    },
                    loggedIn: true,
                    error: data?.error?.message || null,
                    loading: false
                }
            }
            localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME)
            return {
                ...initialState,
                error: data?.error?.message || null
            }
        })
        builder.addCase(loginUser.rejected, () => {
            localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME)
            return {
                ...initialState
            }
        })

        builder.addCase(registerUser.pending, state => ({
            ...state,
            [state.loggedIn]: false,
            [state.loading]: true
        }))
        builder.addCase(registerUser.fulfilled, (state, { payload: data }) => {
            if (data.status) {
                localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, data.data?.token)
                return {
                    userDetails: {
                        "name": data.data?.name || null,
                        "mobile": data.data?.mobile || null
                    },
                    loggedIn: true,
                    error: data?.error?.message || null,
                    loading: false
                }
            }
            localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME)
            return {
                ...initialState,
                error: data?.error?.message || null
            }
        })
        builder.addCase(registerUser.rejected, () => {
            localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME)
            return {
                state: {},
                loggedIn: false,
                loading: false
            }
        })

        builder.addCase(refreshUserState.pending, state => ({
            ...state,
            loggedIn: false,
            loading: true
        }))
        builder.addCase(refreshUserState.fulfilled, (state, { payload: { data } }) => {
            if (data.status) {
                // localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, data.data?.token) //!will decide whether to reset the token with new one
                return {
                    ...state,
                    userDetails: {
                        "name": data.data?.name,
                        "mobile": data.data?.mobile || null
                    },
                    loggedIn: true,
                    error: data?.error?.message || null,
                    loading: false
                }
            }
            localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME)
            return {
                ...initialState,
                error: data?.error?.message || null
            }
        })
        builder.addCase(refreshUserState.rejected, () => ({ ...initialState }))

        builder.addCase(setParticipations.pending, state => ({
            ...state,
            loading: true
        }))
        builder.addCase(setParticipations.fulfilled, (state, { payload: { data, error, status } }) => {
            // console.log(data?.data?.data, "\n", error, "\n", status);
            if (status) {
                return {
                    ...state,
                    participations: data?.data?.data || [], //! validations are remaining here
                    error: error?.message || null,
                    loading: false
                }
            }
            localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME)
            return {
                ...initialState,
                error: error?.message || null
            }
        })
        builder.addCase(setParticipations.rejected, state => ({ ...state }))

        builder.addCase(logoutUser.fulfilled, () => ({ ...initialState }))
    }
})