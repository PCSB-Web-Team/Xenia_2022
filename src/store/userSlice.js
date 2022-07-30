import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    userDetails: {
        "name": 'Abhishek',
        "mobile": ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserReducer: (state, action) => {
            return ({
                ...state,
                loggedIn: true,
                [state.userDetails]: { ...action.payload } || null
            })
        },
        clearUserReducer: (state) => {
            return ({
                [state.userDetails]: {},
                loggedIn: false
            })
        },
    }
})

export default userSlice.reducer;
export const { setUserReducer, clearUserReducer } = userSlice.actions;