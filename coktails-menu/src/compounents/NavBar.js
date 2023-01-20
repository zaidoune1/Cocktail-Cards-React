import "../styles/navbarStyle.css";
import { Link } from "react-router-dom";
    const NavBar = () => {
    return (
        <div className="container-Nav">
            <Link to='/' className="logo hover">The CoktailDB</Link>
            <div className="about-home hover">
                <div className="underLine">
                <Link to="/" className="home links">Home</Link>
                </div>
                <div className="underLine">
                <Link to="/about" className="about links">About</Link>
                </div>
            </div>
        </div>
    )
    }

    export default NavBar