import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findFollowingThunk, followUserThunk} from "../follows/follows-thunks";
import {useEffect} from "react";
import {findUserByIdThunk} from "./users-thunks";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";
import Follows from "../follows/follows";

const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const {currentUser} = useSelector((state) => state.users)
    const {following, loading} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    const handleFollowBtn = () => {
        dispatch(followUserThunk({
            followed: uid
        }))
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
        if (currentUser) {
            console.log(currentUser._id)
            dispatch(findFollowingThunk(currentUser._id))
        }
    }, [uid])


    return (<>
        {currentUser && !loading && following.filter((following) => following.follower == uid) == 0 &&
            <button
                onClick={handleFollowBtn}
                className="btn btn-success float-end">
                Follow
            </button>
        }
        <h1>{publicProfile && publicProfile.username}</h1>
        <ul className="list-group">
            {
                reviews && reviews.map((review) =>
                    <li key={review._id} className="list-group-item">
                        <Link to={`/details/${review.imdbID}`}>
                            {review.review} {review.imdbID}
                        </Link>
                    </li>
                )
            }
        </ul>
        <Follows uid={uid}/>
    </>)
}

export default PublicProfile
