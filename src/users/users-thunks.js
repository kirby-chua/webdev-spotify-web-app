import {createAsyncThunk} from "@reduxjs/toolkit";
import {createUser, findAllUsers, findUserById, login, logout, profile, register} from "./users-service";

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => findUserById(uid)
)
export const registerThunk = createAsyncThunk(
    'register',
    async (user) => register(user)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => login(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => profile()
)
export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => findAllUsers()
)


// don't really need these
export const createUserThunk = createAsyncThunk(
    'createUser',
    async () => createUser()
)