import {createSlice} from "@reduxjs/toolkit";
import {findFollowersThunk, findFollowingThunk, followUserThunk} from "./follows-thunks";

const followsReducer = createSlice({
    name: 'follows',
    initialState: {
        following: [],
        followers: [],
        loading: true
    },
    extraReducers: {
        [followUserThunk.fulfilled]: (state, {payload}) => {
            state.followers.push(payload)

        },
        [findFollowersThunk.fulfilled]: (state, {payload}) => {
            state.followers = payload
            state.loading = false

        },
        [findFollowingThunk.fulfilled]: (state, {payload}) => {
            state.following = payload
            state.loading = false
        },
    }
})

export default followsReducer.reducer