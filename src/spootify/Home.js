import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findLikesThunk} from "../likes/likes-thunks";
import {findAllSongsThunk} from "../songs/songs-thunks";
import {Link} from "react-router-dom";

function Home() {
    const {likes, loading} = useSelector((state) => state.likes)
    const {songs} = useSelector((state) => state.songs)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findLikesThunk())
        dispatch(findAllSongsThunk())
    }, [])


    const getTopSongs = () => {
        const counts = likes.reduce((p, c) => {
            var id = c.song;
            if (!p.hasOwnProperty(id)) {
                p[id] = 0;
            }
            p[id]++;
            return p;
        }, {});

        const topSongs = Object.keys(counts).map(key => {
            const song = songs.find(song => song._id === key)
            return {title: song.title, artist: song.artist, trackId: song.trackId, count: counts[key]}
        })


        return topSongs.sort((a,b) => b.count - a.count).slice(0,25)
    }


    return (
        <div>
            <h1>Welcome to Spootify!</h1>
            <h2>Top Songs</h2>
            {!loading && likes.length !== 0 && songs.length !== 0 && <ul className="list-group">
                {getTopSongs().map(song => <Link to={`/details/${song.trackId}`}
                    className="list-group-item d-flex justify-content-between align-items-center">
                    {song.title}
                    <span className="badge bg-primary ">{song.count}</span>
                </Link>)}
            </ul>}
        </div>

    );
}

export default Home;