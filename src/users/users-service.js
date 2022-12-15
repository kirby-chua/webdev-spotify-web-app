import axios from "axios";

const USER_API = 'http://localhost:4000/users'
const BASE_API = 'http://localhost:4000'

const api = axios.create({withCredentials: true})

export const findUserById = async (uid) => {
    const response = await api.get(`${USER_API}/${uid}`)
    return response.data
}

export const register = async (user) => {
    const response = await api.post(`${BASE_API}/register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${BASE_API}/login`, user)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_API}/logout`)
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${BASE_API}/profile`)
    return response.data
}
export const findAllUsers = async () => {
    const response = await axios.get(`${USER_API}`)
    return response.data
}


// don't really need these
export const createUser = async () => {
}
const deleteUser = async () => {

}
export const updateUser = async (user) => {
    const response = await api.put(`${USER_API}/${user._id}`, user)
    return response.data
}
