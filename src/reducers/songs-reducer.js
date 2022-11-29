import {findSongsThunk} from "../services/songs-thunks";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    songs: [],
    loading: true
}
const songsSlice = createSlice({
    name: 'songs',
    initialState,
    extraReducers: {
        [findSongsThunk.pending]:
            (state) => {
                state.loading = true
                state.songs = []
            },
        [findSongsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.songs = payload
            },
        [findSongsThunk.rejected]:
            (state) => {
                state.loading = true
                state.songs = []
            },
    },
    reducer: {}
});

export default songsSlice.reducer