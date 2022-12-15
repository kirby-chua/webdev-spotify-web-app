import axios from "axios";

const USERS_API = "http://localhost:4000/users"
const LIKES_API = "http://localhost:4000/likes"
const SONGS_API = "http://localhost:4000/songs"

export const userLikesSong = async (uid, sid) => {
    const response = await axios.post(`${USERS_API}/${uid}/likes/${sid}`)
    return response.data
}

export const userUnlikesSong = async (uid, sid) => {
    const response = await axios.delete(`${USERS_API}/${uid}/likes/${sid}`)
    return response.data
}

export const findLikes = async () => {
    const response = await axios.get(LIKES_API)
    return response.data
}

export const findSongsLikedByUser = async (uid) => {
    const response = await axios.get(`${USERS_API}/${uid}/likes`)
    return response.data
}

export const findUsersWhoLikedSong = async (sid) => {
    const response = await axios.get(`${SONGS_API}/${sid}/likes`)
    return response.data
}