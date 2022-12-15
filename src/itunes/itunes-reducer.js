import {findSongBySearchTermThunk} from "./itunes-thunks";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    itunes: [],
    loading: true
}
const itunesSlice = createSlice({
    name: 'itunes',
    initialState,
    extraReducers: {
        [findSongBySearchTermThunk.pending]:
            (state) => {
                state.loading = true
                state.itunes = []
            },
        [findSongBySearchTermThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.itunes = payload
            },
        [findSongBySearchTermThunk.rejected]:
            (state) => {
                state.loading = true
                state.itunes = []
            },
    },
    reducer: {}
});

export default itunesSlice.reducer