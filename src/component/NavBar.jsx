import { Link } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
                <div><Link className="profile-link" to="/"><strong>Pawida</strong> Chumpurat</Link></div>
                <div className="nav-link">
                    <Link className="about-link" to="/aboutme">About</Link>
                    <Link className="passions-link" to="/passions">Passions</Link>
                    <Link className="portfolio-link" to="/portfolio">Portfolio</Link>
                    <button className="button-contact"><Link to="/contact">Contact Me</Link></button>
                </div>
        </div>
    )
};
export default NavBar;