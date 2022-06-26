import React from 'react';
import AuthService from '.././../../services/auth.service';
import './Nav.css';

export default function Nav() {
    const currentUser = AuthService.getCurrentUser();
    const isAdmin = currentUser?.roles.includes("ROLE_ADMIN");
    const isUser = currentUser?.roles.includes("ROLE_USER");
    const isAdminOrUser = currentUser;

    function displayMenu() {
        const element = document.getElementById('myTopnav');

        if (element.className === 'topnav') {
            element.className += ' responsive';
        } else {
            element.className = 'topnav';
        }
    }

    return (
            <div className="topnav" id="myTopnav">
                <a href="/home" className="active">
                    Home
                </a>

                {isAdminOrUser && (
                        <a href="/regears">
                            Regear Requests
                        </a>
                    )}
                {isAdminOrUser && (
                        <a href="/builds">
                            View Builds</a>
                    )}

                {isAdmin && (
                        <a href="/builds/new">
                            Create a Build</a>
                    )}
                <a href="/requirements">
                    Requirements
                </a>

                {currentUser && (
                    <a className="user-name">{currentUser.username}</a>
                )}

                {!currentUser && (
                        <a className="login-link" href="/login">
                            Login</a>
                    )}

                {!currentUser && (
                        <a className="register-link" href="/register">
                            Register</a>
                    )}


                {currentUser && (
                        <button className="logout-button btn" onClick={() => AuthService.logout()}>
                            Logout</button>
                    )}

                <button className="icon" onClick={() => displayMenu()}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>
    )
}