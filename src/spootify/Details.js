import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Moment from 'react-moment';
import {createReviewThunk, findReviewsBySongThunk} from "../reviews/reviews-thunks";
import {findSongBySearchTermThunk} from "../itunes/itunes-thunks";
import {Link} from "react-router-dom";

const Details = () => {
    const {itunesId} = useParams()
    const [review, setReview] = useState('')
    const {reviews} = useSelector((state) => state.reviews)
    const {itunes, loading} = useSelector((state) => state.itunes)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findSongBySearchTermThunk(itunesId))
        dispatch(findReviewsBySongThunk(itunesId))
    }, [])
    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            itunesId
        }))
    }
    return (
        <>
            {loading && <h1>loading</h1>}
            {!loading &&
                <div>
                    <h1>{itunes[0].trackName}</h1>
                    <div className="row">
                        <div className="col-2 d-flex justify-content-center align-self-center">
                            <img src={itunes[0].artworkUrl100}/>
                        </div>
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">Artist: {itunes[0].artistName}</li>
                                <li className="list-group-item">Released: <Moment
                                    format="MMMM Do YYYY">{itunes[0].releaseDate}</Moment></li>
                                <li className="list-group-item">Genre: {itunes[0].primaryGenreName}</li>
                                <li className="list-group-item">
                                    <audio controls>
                                        <source src={itunes[0].previewUrl}></source>
                                    </audio>
                                </li>
                            </ul>
                        </div>

                        {
                            currentUser && currentUser.role == 'ADMIN' &&
                            <div className="pt-2">
                                <textarea
                                    onChange={(e) => setReview(e.target.value)}
                                    className="form-control"></textarea>
                                <button className="btn btn-primary justify-content-center"
                                        onClick={handlePostReviewBtn}>Post Review
                                </button>
                            </div>
                        }
                    </div>
                    <h2>Reviews:</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-10 border-end">Review:</div>
                                <div className="col-2">Author:</div>
                            </div>
                        </li>
                        {
                            reviews.map((review) =>
                                <li key={review._id} className="list-group-item">
                                    <div className="row">
                                        <div className="col-10 border-end">
                                            {review.review}

                                        </div>
                                        <div className="col-2">
                                            <Link to={`/profile/${review.author._id}`}>
                                                {review.author.username}
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            }
            {/*<pre>*/}
            {/*    {JSON.stringify(itunes[0], null, 2)}*/}
            {/*</pre>*/}
        </>
    );
}

export default Details;