import {createAsyncThunk} from "@reduxjs/toolkit";
import {findFollowers, findFollowing, followUser} from "./follows-service";


export const followUserThunk = createAsyncThunk(
    'followUser',
    async (follow) => followUser(follow)
)

export const findFollowersThunk = createAsyncThunk(
    'findFollowers',
    async (followed) => findFollowers(followed)
)

export const findFollowingThunk = createAsyncThunk(
    'findFollowing',
    async (follower) => findFollowing(follower)
)