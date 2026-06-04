import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

function Signup() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-logo">
                    <i className="fa-solid fa-hotel"></i>
                </div>
                <h2>Create Account</h2>
                <p className="auth-subtitle">Sign up to explore premium bookings</p>

                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <label htmlFor="fullName">Full Name</label>
                        <div className="input-wrapper">
                            <i className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-wrapper">
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                id="email"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    {/* <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="input-wrapper">
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div> */}

                    <button type="submit" className="submit-btn">Create Account</button>
                </form>

                <div className="divider">OR</div>

                <div className="social-buttons">
                    <button className="social-btn">
                        <i className="fa-brands fa-google"></i>
                        Google
                    </button>
                    <button className="social-btn">
                        <i className="fa-brands fa-apple"></i>
                        Apple
                    </button>
                </div>

                <p className="bottom-text">
                    Already have an account?
                    <Link to="/login">Sign In</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
