import {createSlice} from "@reduxjs/toolkit";
import {
    createSongThunk,
    deleteSongThunk,
    findAllSongsThunk,
    findSongByTrackIdThunk,
    findSongThunk,
    getTopSongsThunk,
    updateSongThunk
} from "./songs-thunks";

const initialState = {
    songs: [],
    topSongs: [],
    loading: true
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
            state.loading = false
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
            state.loading = false
        },
        [findSongByTrackIdThunk.fulfilled]: (state, {payload}) => {
            state.songs.push(payload)
            state.loading = false
        },
        [getTopSongsThunk.fulfilled]: (state, {payload}) => {
            state.topSongs = payload
            state.loading = false
        }
    }
})

export default songsReducer.reducer