import {Navigate, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import Follows from "../follows/follows";
import {useEffect} from "react";
import {deleteReviewThunk, findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {findSongsLikedByUserThunk} from "../likes/likes-thunks";
import {Link} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const {likes, loading} = useSelector((state) => state.likes)
    const dispatch = useDispatch()

    const deleteReviewHandler = (rid) => {
        dispatch(deleteReviewThunk(rid))
    }

    useEffect(() => {
        dispatch(findReviewsByAuthorThunk(currentUser._id))
        dispatch(findSongsLikedByUserThunk(currentUser._id))
    }, [reviews])

    if (!currentUser) {
        return (<Navigate to={'/'}/>)
    }

    return (
        <>
            <h1>Profile</h1>
            <div className="row">
                <div className="col">
                    {
                        currentUser &&
                        <h2>Welcome User: {currentUser.username}</h2>
                    }
                </div>

                <div className="col">
                    <Link to="/edit_profile" className="btn btn-primary">
                        Edit Profile
                    </Link>
                </div>
            </div>

            {/*this is not working*/}
            {likes.length > 0 &&
                <h2> Liked Songs: </h2>}
            <ul className="list-group">
                {
                    likes.map((like) => <Link to={`/details/${like.song.trackId}`} key={like._id} className="list-group-item">{like.song.title}</Link>)
                }
            </ul>
            {/* add remove review*/}
            {reviews.length > 0 &&
                <h2> Reviews: </h2>}
            <ul className="list-group">
                {
                    reviews.map((review) => <Link to={`/details/${review.itunesId}`} key={review._id} className="list-group-item">{review.review}<i
                        className="bi bi-x-lg float-end"
                        onClick={() => deleteReviewHandler(review._id)}
                    ></i></Link>)
                }
            </ul>

            <Follows uid={currentUser._id}/>


        </>
    )

}

export default Profile