import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service
    from "./itunes-service"

export const findSongBySearchTermThunk = createAsyncThunk('findItunesSongs', async (song) =>
    await service.findSongBySearchTerm(song))