import React, {useState} from "react";
import Nav from "./Nav";
import {useDispatch, useSelector} from "react-redux";
import {findSongsThunk} from "./services/songs-thunks";


function Search() {
    const [song, setSong] = useState({song: ''});
    const songChangeHandler = (event) => {
        const songValue = event.target.value;
        const newSong = {
            song: songValue
        }
        setSong(newSong);
    }
    const {songs, loading} = useSelector(
        state => state.songs
    )
    const dispatch = useDispatch();
    const searchSong = () => {
        dispatch(findSongsThunk(song));
    }
    return (
        <div>
            <Nav/>
            <h1>Search Page</h1>
            <div>
                <button onClick={searchSong}
                        className="btn btn-primary w-25
                          float-end">
                    Search
                </button>
                <input onChange={songChangeHandler}
                       value={song.song}
                       className="form-control w-75"/>
            </div>
            {/*
                Todo: styling
                Todo: maybe put this in a component
            */}
            <ul className="list-group">
                {songs.map(song => <li className="list-group-item" key={song.trackId}>
                    <div>{song.trackName}</div>
                    <div>
                        <audio controls>
                            <source src={song.previewUrl}></source>
                        </audio>
                    </div>
                </li>)}
            </ul>
        </div>

    );
}

export default Search;