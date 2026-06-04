import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-logo">
                    <i className="fa-solid fa-hotel"></i>
                </div>
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Login to access your luxury stays</p>

                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
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

                    <button type="submit" className="submit-btn">Login</button>
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
                    Don't have an account?
                    <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
