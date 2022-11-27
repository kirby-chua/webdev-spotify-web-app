import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./Home";
import Search from "./Search";
import Details from "./Details";
import Login from "./Login";
import Profile from "./Profile";

function App() {
    return (
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
    );
}

export default App;
