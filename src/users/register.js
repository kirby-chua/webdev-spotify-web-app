import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {registerThunk} from "./users-thunks";
import {Navigate} from "react-router";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('username')
    const [password, setPassword] = useState('password')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password}))
    }

    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return (
        <>
            <h1>Register</h1>
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
            <button
                className="btn btn-primary w-100"
                onClick={handleRegisterBtn}>
                Register
            </button>
            {
                currentUser &&
                <h1>Welcome new user: {currentUser.username}</h1>
            }
        </>
    )
}

export default Register