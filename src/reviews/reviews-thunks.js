import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, findReviewsByAuthor, findReviewsBySong} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)
export const findReviewsBySongThunk = createAsyncThunk(
    'findReviewsBySong',
    async (sid) => findReviewsBySong(sid)
)

export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthor',
    async (author) => findReviewsByAuthor(author)
)