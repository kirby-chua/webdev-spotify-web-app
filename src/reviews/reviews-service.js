import axios from "axios";

const REVIEWS_API = "http://localhost:4000/reviews"
const SONGS_API = "http://localhost:4000/songs"
const USERS_API = "http://localhost:4000/users"

const api = axios.create({withCredentials: true})

export const createReview = async (review) => {
    console.log(REVIEWS_API)
    const response = await api.post(REVIEWS_API, review)
    return response.data
}

export const findReviewsBySong = async (sid) => {
    const response = await api.get(`${SONGS_API}/${sid}/reviews`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${USERS_API}/${author}/reviews`)
    return response.data
}
