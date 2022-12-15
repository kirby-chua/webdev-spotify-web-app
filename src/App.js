import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./spootify/Home";
import Search from "./spootify/Search";
import Details from "./spootify/Details";
import Login from "./users/login";
import {Provider} from "react-redux";
import itunesReducer from "./itunes/itunes-reducer";
import followsReducer from "./follows/follows-reducer"
import likesReducer from "./likes/likes-reducer"

import {configureStore} from "@reduxjs/toolkit";
import CurrentUser from "./users/current-user";
import reviewsReducer from "./reviews/reviews-reducer";
import usersReducer from "./users/users-reducer";
import songsReducer from "./songs/songs-reducer";
import Nav from "./spootify/Nav";
import ProtectedRoute from "./users/protected-route";
import PublicProfile from "./users/public-profile";
import Register from "./users/register";
import Logout from "./users/logout";
import Profile from "./users/profile";
import Users from "./users";
import {EditProfile} from "./users/edit-profile";

const store = configureStore({
    reducer: {
        itunes: itunesReducer,
        songs: songsReducer,
        likes: likesReducer,
        users: usersReducer,
        reviews: reviewsReducer,
        follows: followsReducer

    }
});

function App() {
    return (
        <div className="container">
            <Provider store={store}>
                <BrowserRouter>
                    <CurrentUser>
                        <Nav/>
                        <Routes>
                            <Route path="/*"
                                   element={<Home/>}/>
                            <Route path="/search"
                                   element={<Search/>}/>
                            <Route path="/details/:itunesId"
                                   element={<Details/>}/>
                            <Route path="/login"
                                   element={<Login/>}/>
                            <Route path="/register"
                                   element={<Register/>}/>
                            <Route path="/logout"
                                   element={<Logout/>}/>
                            <Route path="/profile/"
                                   element={
                                       <ProtectedRoute>
                                           <Profile/>
                                       </ProtectedRoute>}/>
                            <Route path="/profile/:uid"
                                   element={
                                       <PublicProfile/>}/>
                            <Route path="/edit_profile"
                                   element={<EditProfile/>}/>
                            <Route path="/users"
                                   element={<ProtectedRoute>
                                       <Users/>
                                   </ProtectedRoute>}/>
                        </Routes>
                    </CurrentUser>
                </BrowserRouter>
            </Provider>
        </div>

    );
}

export default App;
