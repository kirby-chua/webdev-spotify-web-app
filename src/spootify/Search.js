import React, {useState} from "react";
import Nav from "./Nav";
import {useDispatch, useSelector} from "react-redux";
import {findItunesSongsThunk} from "../itunes/itunes-thunks";


function Search() {
    const [song, setSong] = useState({song: ''});
    const songChangeHandler = (event) => {
        const songValue = event.target.value;
        const newSong = {
            song: songValue
        }
        setSong(newSong);
    }
    const {itunes, loading} = useSelector(
        state => state.itunes
    )
    const dispatch = useDispatch();
    const searchSong = () => {
        dispatch(findItunesSongsThunk(song));
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
                {itunes.map(song => <li className="list-group-item" key={song.trackId}>
                    <div className="row">
                        <div className="col">{song.trackName}</div>
                        <div className="col">
                            <audio controls>
                                <source src={song.previewUrl}></source>
                            </audio>
                        </div>
                        <div className="col">
                            <img src={song.artworkUrl100}></img>
                        </div>
                        <div className="col">
                            <i className="bi bi-heart"></i>
                        </div>
                    </div>

                </li>)}
            </ul>
        </div>

    );
}

export default Search;