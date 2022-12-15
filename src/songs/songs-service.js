import axios from "axios";

const SONGS_API = "http://localhost:4000/songs"

export const createSong = async (song) => {
    const response = await axios.post(SONGS_API, song)
    return response.data
}

export const findAllSongs = async () => {
    const response = await axios.get(SONGS_API)
    return response.data
}

export const updateSong = async (song) => {
    const response = await axios.put(`${SONGS_API}/${song._id}`, song)
    return response.data
}

export const deleteSong = async (sid) => {
    const response = await axios.delete(`${SONGS_API}/${sid}`)
    return response.data
}

export const findSong = async (sid) => {
    const response = await axios.get(`${SONGS_API}/${sid}`)
    return response.data
}

export const findSongByTrackId = async (sid) => {
    const response = await axios.get(`${SONGS_API}/${sid}/track`)
    return response.data
}

export const getTopSongs = async () => {
    const response = await axios.get('http://localhost:4000/top_songs')
    return response.data
}