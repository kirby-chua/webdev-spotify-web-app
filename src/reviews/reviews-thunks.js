import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, deleteReview, findReviewsByAuthor, findReviewsBySong} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)
export const deleteReviewThunk = createAsyncThunk(
    'deleteReview',
    async (rid) => deleteReview(rid)
)

export const findReviewsBySongThunk = createAsyncThunk(
    'findReviewsBySong',
    async (sid) => findReviewsBySong(sid)
)

export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthor',
    async (author) => findReviewsByAuthor(author)
)