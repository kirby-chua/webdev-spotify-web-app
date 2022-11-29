import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service
    from "./songs-service"

export const findSongsThunk = createAsyncThunk('songs/findSongs', async (song) =>
    await service.findSongs(song.song))