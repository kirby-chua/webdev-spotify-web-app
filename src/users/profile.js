import {Navigate, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunks";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    if (!currentUser) {
        return (<Navigate to={'/'}/>)
    }

    return (
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <h2>Welcome new user: {currentUser.username}</h2>
            }
            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )

}

export default Profile