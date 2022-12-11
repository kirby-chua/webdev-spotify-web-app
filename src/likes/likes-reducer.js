import {createSlice} from "@reduxjs/toolkit";
import {
    findLikesThunk,
    findSongsLikedByUserThunk,
    findUsersWhoLikedSongThunk,
    userLikesSongThunk,
    userUnlikesSongThunk
} from "./likes-thunks";

const initialState = {
    likes: [],
    songs: [],
    users: [],
    loading: true
}

const likesReducer = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [userLikesSongThunk.fulfilled]: (state, {payload}) => {
            state.likes.push(payload)
        },
        [userUnlikesSongThunk.fulfilled]: (state, {payload}) => {
            state.likes
                .filter(like => like._id !== payload)
        },
        [findLikesThunk.fulfilled]: (state, {payload}) => {
            state.likes = payload
            state.loading = false
        },
        [findSongsLikedByUserThunk.fulfilled]: (state, {payload}) => {
            state.likes = payload
            state.loading = false
        },
        [findUsersWhoLikedSongThunk.fulfilled]: (state, {payload}) => {
            state.users = payload
            state.loading = false
        }
    }
})

export default likesReducer.reducer