import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, findReviewsByAuthorThunk, findReviewsBySongThunk} from "./reviews-thunks";

const initialState = {
    reviews: [],
    loading: false
}

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, {payload}) => {
            state.reviews.push(payload)
        },
        [findReviewsBySongThunk.fulfilled]: (state, {payload}) => {
            state.reviews = payload
        },
        [findReviewsByAuthorThunk.fulfilled]: (state, {payload}) => {
            state.reviews = payload
        },
    }
})

export default reviewsReducer.reducer