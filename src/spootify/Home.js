import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getTopSongsThunk} from "../songs/songs-thunks";
import {Link} from "react-router-dom";

function Home() {
    const {songs, loading} = useSelector((state) => state.songs)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopSongsThunk())
    }, [])

    return (
        <div>
            <h1>Welcome to Spootify!</h1>
            <h2>Top Songs</h2>
            {!loading && <ul className="list-group">
                {songs.map((song) =>
                    <Link key={song.result[0].trackId} className="list-group-item d-flex justify-content-between align-items-center"
                          to={`/details/${song.result[0].trackId}`}>
                        {song.result[0].title} - {song.result[0].artist}
                        <span className="badge bg-primary float-end">{song.likes}</span>
                    </Link>
                )}
            </ul>}
        </div>

    );
}

export default Home;