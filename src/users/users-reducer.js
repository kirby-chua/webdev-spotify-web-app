import {createSlice} from "@reduxjs/toolkit";
import {
    findAllUsersThunk,
    findUserByIdThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk
} from "./users-thunks";

const initialState = {
    users: [],
    loading: false,
    currentUser: null,
    publicProfile: null,
}

const usersReducer = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [findUserByIdThunk.fulfilled]: (state, {payload}) => {
            state.users = payload
        },
        [registerThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload
        },
        [loginThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload
        },
        [logoutThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload
        },
        [findAllUsersThunk.fulfilled]: (state, {payload}) => {
            state.users = payload
        },
    }
})

export default usersReducer.reducer