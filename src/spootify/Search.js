import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findItunesSongsThunk} from "../itunes/itunes-thunks";
import {Link} from "react-router-dom";
import {
    findSongsLikedByUserThunk,
    userLikesSongThunk,
    userUnlikesSongThunk
} from "../likes/likes-thunks";
import {
    createSongThunk,
    findAllSongsThunk,
} from "../songs/songs-thunks";


function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const {itunes} = useSelector(
        state => state.itunes
    )
    const {songs} = useSelector((state) => state.songs)
    const {currentUser} = useSelector((state) => state.users)
    const {likes, loading} = useSelector((state) => state.likes)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findItunesSongsThunk(searchTerm))
        dispatch(findAllSongsThunk())
    }, [])
    useEffect(() => {
        if (currentUser) {
            dispatch(findSongsLikedByUserThunk(currentUser._id))
        }
    }, [])


    const itunesToSong = (itunes) => {
        return {
            title: itunes.trackName,
            artist: itunes.artistName,
            trackId: itunes.trackId,
            releaseDate: itunes.releaseDate,
            previewUrl: itunes.previewUrl,
            artworkUrl: itunes.artworkUrl,
        }
    }

    const RenderLike = ({song = {}}) => {
        if (likes.filter(like => like.song.trackId == song.trackId) == 0) {
            return <i
                onClick={() => {
                    const foundSong = songs.find(s => s.trackId == song.trackId)
                    if (foundSong) {
                        dispatch(userLikesSongThunk(
                            {
                                uid: currentUser._id, sid: foundSong._id
                            })).then(() => {
                        }).then(() => dispatch(findSongsLikedByUserThunk(currentUser._id)))
                    } else {
                        dispatch(createSongThunk(itunesToSong(song))).then(res => {
                                const createdSong = res.payload
                                dispatch(userLikesSongThunk(
                                    {
                                        uid: currentUser._id, sid: createdSong._id
                                    })).then(() => dispatch(findSongsLikedByUserThunk(currentUser._id)))
                            }
                        )

                    }

                }}
                className="bi bi-heart"></i>
        } else {
            return <i
                onClick={() => {
                    const foundSong = songs.find(s => s.trackId == song.trackId)
                    dispatch(userUnlikesSongThunk(
                        {
                            uid: currentUser._id, sid: foundSong._id
                        })).then(() => dispatch(findSongsLikedByUserThunk(currentUser._id)))
                }
                }
                className="bi bi-heart-fill"></i>

        }
    }
    return (
        <div>
            <h1>Search Page</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findItunesSongsThunk(searchTerm))
                            // if (currentUser) {
                            //     dispatch(findSongsLikedByUserThunk(currentUser._id))
                            // }
                        }}>Search
                    </button>
                    <input
                        className="form-control w-75"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                </li>
                {/*
                Todo: styling
                Todo: maybe put this in a component
            */}
                {itunes && loading && <h2>loading</h2>}
                {itunes && !loading && itunes.map(song => <li className="list-group-item" key={song.trackId}>
                    <div className="row">
                        <Link to={`/details/${song.trackId}`}>{song.trackName}</Link>
                        <div className="col">
                            <audio controls>
                                <source src={song.previewUrl}></source>
                            </audio>
                        </div>
                        <div className="col">
                            <img src={song.artworkUrl100}></img>
                        </div>
                        {
                            currentUser &&
                            <RenderLike song={song}/>
                        }


                        {/*<div className="col">*/}
                        {/*    <i className="bi bi-heart"></i>*/}
                        {/*</div>*/}
                    </div>

                </li>)}
            </ul>
            <pre>
                {JSON.stringify(itunes, null, 2)}
            </pre>
        </div>

    );
}

export default Search;