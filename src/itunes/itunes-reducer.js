import {findItunesSongsThunk} from "./itunes-thunks";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    itunes: [],
    loading: true
}
const itunesSlice = createSlice({
    name: 'itunes',
    initialState,
    extraReducers: {
        [findItunesSongsThunk.pending]:
            (state) => {
                state.loading = true
                state.itunes = []
            },
        [findItunesSongsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.itunes = payload
            },
        [findItunesSongsThunk.rejected]:
            (state) => {
                state.loading = true
                state.itunes = []
            },
    },
    reducer: {}
});

export default itunesSlice.reducer