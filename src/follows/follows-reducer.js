import {createSlice} from "@reduxjs/toolkit";
import {findFollowersThunk, findFollowingThunk, followUserThunk, unfollowUserThunk} from "./follows-thunks";

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
        [unfollowUserThunk.fulfilled]: (state, {payload}) => {
            state.followers
                .filter(follow => follow._id !== payload)
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