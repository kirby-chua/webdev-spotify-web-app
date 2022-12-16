import {createSlice} from "@reduxjs/toolkit";
import {
    findAllUsersThunk,
    findUserByIdThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk,
    updateUserThunk
} from "./users-thunks";

const initialState = {
    users: [],
    loading: true,
    currentUser: null,
    publicProfile: null,
    login: false,
    register: false
}

const usersReducer = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [findUserByIdThunk.fulfilled]: (state, {payload}) => {
            state.publicProfile = payload
        },
        [registerThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload
            state.register = false
        },
        [registerThunk.rejected]: (state, {payload}) => {
            state.register = true
        },
        [loginThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload
            state.login = false
        },
        [loginThunk.rejected]: (state, {payload}) => {
            state.login = true
        },
        [logoutThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload
        },
        [findAllUsersThunk.fulfilled]: (state, {payload}) => {
            state.users = payload
            state.loading = false
        },
        [updateUserThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload
        },
    }
})

export default usersReducer.reducer