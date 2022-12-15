// Todo: this
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateUserThunk} from "./users-thunks";

export const EditProfile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [username, setUsername] = useState(currentUser.username)
    const [password, setPassword] = useState(currentUser.password)
    const handleUpdateBtn = () => {
        dispatch(updateUserThunk({
            ...currentUser,
            password: password,
            username: username
        }))
        navigate('/profile')
    }

    useEffect(() => {
    }, [])

    return (
        <>
            <h1>Edit Profile</h1>

            <div>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="username"
                    value={username}/>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="password"
                    type="password"
                    value={password}/>
            </div>
            <button
                className="btn btn-primary w-100"
                onClick={handleUpdateBtn}>
                Update
            </button>
        </>
    )

}