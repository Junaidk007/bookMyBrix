import './navbar.css';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
<<<<<<< Updated upstream
        <nav className="navbar">
            <div className="nav-container" style={{boxShadow: isMenuOpen ? 'none' : '0 10px 30px rgba(0, 0, 0, 0.06)'}}>
                <h2 className="nav-logo">BookMyBriks</h2>
                <div className="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <div className="login-cta">
                        <button>Get Started</button>
=======
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} >
            <div>
                <div className="nav-container">
                    <h2 className="nav-logo">BookMyBriks</h2>
                    <div className="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                        <div className="login-cta">
                            <button>Get Started</button>
                        </div>
>>>>>>> Stashed changes
                    </div>
                    <button className={`mobile-menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={() => (setIsMenuOpen(!isMenuOpen))}>
                        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </div>

<<<<<<< Updated upstream
                <div className="mobile-menu" style={{ top: isMenuOpen ? '64px' : '-100%' }}>
=======
                <div className="mobile-menu">
>>>>>>> Stashed changes
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