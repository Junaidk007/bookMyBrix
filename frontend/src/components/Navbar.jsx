import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} >
            <div>
                <div className="nav-container">
                    <h2 className="nav-logo"><Link to="/">BookMyBriks</Link></h2>
                    <div className="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <div className="login-cta">
                            <Link to="/add-listing" className="nav-link"><button>Add Listing</button></Link>
                        </div>
                    </div>
                    <button className={`mobile-menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={() => (setIsMenuOpen(!isMenuOpen))}>
                        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </div>

                <div className="mobile-menu">
                    <ul className="nav-menu mobile-nav-menu">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/add-listing" className="nav-link">Add Listing</Link>
                        </li>
                    </ul>
                    <div className="login-cta mobile-login-cta">
                        <button>Get Started</button>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;