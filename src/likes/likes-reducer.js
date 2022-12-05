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
    loading: false
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
        },
        [findSongsLikedByUserThunk.fulfilled]: (state, {payload}) => {
            state.songs = payload
        },
        [findUsersWhoLikedSongThunk.fulfilled]: (state, {payload}) => {
            state.users = payload
        }
    }
})

export default likesReducer.reducer