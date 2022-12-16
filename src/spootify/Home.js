import {Navigate, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getTopSongsThunk} from "../songs/songs-thunks";
import {Link} from "react-router-dom";
import Follows from "../follows/follows";
import {deleteReviewThunk, findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {findSongsLikedByUserThunk} from "../likes/likes-thunks";

function Home() {
    const navigate = useNavigate()
    const {topSongs, loading} = useSelector((state) => state.songs)
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const {likes, loading2} = useSelector((state) => state.likes)
    const dispatch = useDispatch()

    const deleteReviewHandler = (rid) => {
        dispatch(deleteReviewThunk(rid))
    }

    useEffect(() => {
        dispatch(getTopSongsThunk())

    }, [])

    useEffect(() => {
        if(currentUser != null) {
            dispatch(findReviewsByAuthorThunk(currentUser._id))
            dispatch(findSongsLikedByUserThunk(currentUser._id))
        }
    }, [reviews])

    return (
        <div>
            <h1 className="mt-2 text-center">Welcome to Spootify!</h1>
            <h2 className="mt-2 text-center">Top Songs</h2>
            {!loading && <ul className="list-group">
                {topSongs.map((song) =>
                    <Link key={song.result[0].trackId} className="list-group-item d-flex justify-content-between align-items-center"
                          to={`/details/${song.result[0].trackId}`}>
                        {song.result[0].title} - {song.result[0].artist}
                        <span className="badge bg-primary float-end">{song.likes}</span>
                    </Link>
                )}
            </ul>}

            {likes.length > 0 &&
                <h2 className="mt-3 text-center"> Liked Songs </h2>}
            <ul className="list-group">
                {
                    likes.map((like) => <Link to={`/details/${like.song.trackId}`} key={like._id} className="list-group-item">{like.song.title}</Link>)
                }
            </ul>
            {/* add remove review*/}
            {reviews.length > 0 &&
                <h2 className="mt-3 text-center"> Reviews </h2>}
            <ul className="list-group">
                {
                    reviews.map((review) => <Link to={`/details/${review.itunesId}`} key={review._id} className="list-group-item">{review.review}<i
                        className="bi bi-x-lg float-end"
                        onClick={() => deleteReviewHandler(review._id)}
                    ></i></Link>)
                }
            </ul>
        </div>

    );
}

export default Home;