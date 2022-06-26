import React from "react";
import './Header.css';

export default function Header() {

    return (
        <div className="header">
            <div className="header-text">
                <h1 className="header-primary">
                    Tidal Regear Management System [TRMS]
                </h1>
                <p className="header-lead">
                    View and Manage Builds and Requests instantly!
                </p>
            </div>
        </div>
    )
}

