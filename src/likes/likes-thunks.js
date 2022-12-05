import {createAsyncThunk} from "@reduxjs/toolkit";
import {findLikes, findSongsLikedByUser, findUsersWhoLikedSong, userLikesSong, userUnlikesSong} from "./likes-service";

export const userLikesSongThunk = createAsyncThunk(
    'userLikesSong',
    async (like) => userLikesSong(like.uid, like.sid)
)

export const userUnlikesSongThunk = createAsyncThunk(
    'userUnlikesSong',
    async (like) => userUnlikesSong(like.uid, like.sid)
)

export const findLikesThunk = createAsyncThunk(
    'findLikes',
    async () => findLikes()
)

export const findSongsLikedByUserThunk = createAsyncThunk(
    'findSongsLikedByUser',
    async (user) => findSongsLikedByUser(user)
)

export const findUsersWhoLikedSongThunk = createAsyncThunk(
    'findUsersWhoLikedSong',
    async (song) => findUsersWhoLikedSong(song)
)