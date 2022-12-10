import {Navigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunks";

const Logout = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    dispatch(logoutThunk())
    if (!currentUser) {
        return (<Navigate to={'/'}/>)
    }
}

export default Logout