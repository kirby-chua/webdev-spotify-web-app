import {createAsyncThunk} from "@reduxjs/toolkit";
import {createSong, deleteSong, findAllSongs, findSong, findSongByTrackId, updateSong} from "./songs-service";

export const createSongThunk = createAsyncThunk(
    'createSong',
    async (song) => createSong(song)
)

export const findAllSongsThunk = createAsyncThunk(
    'findAllSongs',
    async () => findAllSongs()
)

export const updateSongThunk = createAsyncThunk(
    'updateSong',
    async (song) => updateSong(song)
)
export const deleteSongThunk = createAsyncThunk(
    'deleteSong',
    async (sid) => deleteSong(sid)
)


export const findSongThunk = createAsyncThunk(
    'findSong',
    async (sid) => findSong(sid)
)

export const findSongByTrackIdThunk = createAsyncThunk(
    'findSongByTrackId',
    async (sid) => findSongByTrackId(sid)
)