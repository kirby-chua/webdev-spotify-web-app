import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router";
import {loginThunk} from "./users-thunks";
import {useState} from "react";

function Login() {
    const {currentUser, login} = useSelector((state) => state.users)
    const [username, setUsername] = useState('alice')
    const [password, setPassword] = useState('alice1234')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
            // navigate('/profile')
        } catch (e) {

        }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return (
        <>
            <h1>Login</h1>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}/>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" placeholder="password" type="password" value={password}/>
            <button
                className="btn btn-primary w-100"
                onClick={handleLoginBtn}>Login
            </button>
            {
                login && <h4 className="text-danger">Login failed</h4>
            }
        </>
    )
}

export default Login;