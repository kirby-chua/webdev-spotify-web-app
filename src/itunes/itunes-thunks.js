import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service
    from "./itunes-service"

export const findItunesSongsThunk = createAsyncThunk('findItunesSongs', async (song) =>
    await service.findItunesSongs(song.song))