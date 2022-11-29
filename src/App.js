import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./Home";
import Search from "./Search";
import Details from "./Details";
import Login from "./Login";
import Profile from "./Profile";
import {Provider} from "react-redux";
import songsReducer from "./reducers/songs-reducer";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore(
    {reducer: {songs: songsReducer}});

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
