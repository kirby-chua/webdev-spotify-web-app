import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findFollowersThunk, findFollowingThunk} from "./follows-thunks";
import {Link} from "react-router-dom";

const Follows = ({uid}) => {
    const {followers, following} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
    }, [followers])

    return (
        <>
            {following.length > 0 && <h2>Following</h2>
            }
            <div className="list-group">
                {
                    following && following.map((follow) =>
                        <Link key={follow._id} to={`/profile/${follow.followed._id}`} className="list-group-item">
                            {follow.followed.username}
                        </Link>
                    )
                }
            </div>
            {followers.length > 0 && <h2>Followers</h2>
            }
            <div className="list-group">
                {
                    followers && followers.map((follow) =>
                        <Link key={follow._id} to={`/profile/${follow.follower._id}`} className="list-group-item">
                            {follow.follower.username}
                        </Link>
                    )
                }
            </div>
        </>
    )
}

export default Follows