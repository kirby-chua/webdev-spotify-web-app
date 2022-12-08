import {createSlice} from "@reduxjs/toolkit";
import {createSongThunk, deleteSongThunk, findAllSongsThunk, findSongThunk, updateSongThunk} from "./songs-thunks";

const initialState = {
    songs: [],
    loading: false
}
const songsReducer = createSlice({
    name: 'songs',
    initialState,
    extraReducers: {
        [createSongThunk.fulfilled]: (state, {payload}) => {
            state.songs.push(payload)
        },
        [findAllSongsThunk.fulfilled]: (state, {payload}) => {
            state.songs = payload
        },
        [updateSongThunk.fulfilled]: (state, {payload}) => {
            const songNdx = state.songs
                .findIndex((s) => s._id === payload._id)
            state.songs[songNdx] = {
                ...state.songs[songNdx],
                ...payload
            }
        },
        [deleteSongThunk.fulfilled]: (state, {payload}) => {
            state.songs
                .filter(song => song._id !== payload)
        },
        [findSongThunk.fulfilled]: (state, {payload}) => {
            state.songs = payload
        }
    }
})

export default songsReducer.reducer