import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    userDetails: {
        "name": '',
        "mobile": ''
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserReducer: (state, action) => {
            return ({
                ...state,
                loggedIn: true,
                [state.userDetails]: { ...action.payload }
            })
        },
        clearUserReducer: (state) => {
            return ({
                loggedIn: false,
                [state.userDetails]: {}
            })
        },
    }
})

export const userSelector = state => state.user;
export const { setUserReducer, clearUserReducer } = userSlice.actions;