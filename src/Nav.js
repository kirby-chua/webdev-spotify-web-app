import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/search">Search</Link> |
            <Link to="/login">Login</Link> |
            <Link to="/profile">Profile</Link> |
            <Link to="/details">Details</Link>
        </div>
    );
}

export default Nav;