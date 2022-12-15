import {Navigate, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import Follows from "../follows/follows";
import {useEffect} from "react";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {findSongsLikedByUserThunk} from "../likes/likes-thunks";
import {Link} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const {likes} = useSelector((state) => state.likes)
    const dispatch = useDispatch()
    useEffect(() => {
        findReviewsByAuthorThunk(currentUser._id)
        findSongsLikedByUserThunk(currentUser._id)
    }, [])

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

            {likes.length > 0 &&
                <h2> Liked Songs: </h2>}
            <ul className="list-group">
                {
                    likes.map((like) => <li className="list-group-item">{like.song.title}</li>)
                }
            </ul>
            {reviews.length > 0 &&
                <h2> Reviews: </h2>}
            <ul className="list-group">
                {
                    reviews.map((review) => <li className="list-group-item">{review.review}</li>)
                }
            </ul>

            <Follows uid={currentUser._id}/>





        </>
    )

}

export default Profile