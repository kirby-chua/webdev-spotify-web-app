import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./spootify/Home";
import Search from "./spootify/Search";
import Details from "./spootify/Details";
import Login from "./spootify/Login";
import Profile from "./spootify/Profile";
import {Provider} from "react-redux";
import itunesReducer from "./itunes/itunes-reducer";
import followsReducer from "./follows/follows-reducer"
import likesReducer from "./likes/likes-reducer"

import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        itunes: itunesReducer,
        // songs: songsReducer,
        likes: likesReducer,
        // users: usersReducer,
        // reviews: reviewsReducer,
        follows: followsReducer

    }
});

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/*"
                               element={<Home/>}/>
                        <Route path="/search"
                               element={<Search/>}/>
                        <Route path="/details"
                               element={<Details/>}/>
                        <Route path="/login"
                               element={<Login/>}/>
                        <Route path="/profile"
                               element={<Profile/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
