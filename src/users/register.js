import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {registerThunk} from "./users-thunks";
import {Navigate} from "react-router";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('username')
    const [password, setPassword] = useState('password')
    const [role, setRole] = useState('USER')

    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password, role}))
    }

    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return (
        <>
            <h1>Register</h1>
            <div className="row">
                <div className="col-10">
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
                <div className="col-2 align-self-center">
                    <span className="fw-bold">User Type: </span><br/>
                    <input onClick={() => setRole('ADMIN')}
                           type="radio" id="USER" name="user-role" value="USER" checked/>
                    <label htmlFor="USER">Regular User</label><br/>
                    <input
                        onClick={() => setRole('ADMIN')}
                        type="radio" id="ADMIN" name="user-role" value="ADMIN"/>
                    <label htmlFor="ADMIN">Reviewer</label><br/>

                </div>
            </div>
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