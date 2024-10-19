import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <NavLink className="sidebar-brand" to="/">
                    <span className="align-middle">AdminKit</span>
                </NavLink>
                <ul className="sidebar-nav">
                    <li className="sidebar-header">Pages</li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/"
                        >
                            <i className="align-middle" data-feather="sliders"></i>
                            <span className="align-middle">Dashboard</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/profile"
                        >
                            <i className="align-middle" data-feather="user"></i>
                            <span className="align-middle">Profile</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/signin"
                        >
                            <i className="align-middle" data-feather="log-in"></i>
                            <span className="align-middle">Sign In</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/sign-up"
                        >
                            <i className="align-middle" data-feather="user-plus"></i>
                            <span className="align-middle">Sign Up</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/blank"
                        >
                            <i className="align-middle" data-feather="book"></i>
                            <span className="align-middle">Blank</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-header">Tools & Components</li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/buttons"
                        >
                            <i className="align-middle" data-feather="square"></i>
                            <span className="align-middle">Buttons</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/forms"
                        >
                            <i className="align-middle" data-feather="check-square"></i>
                            <span className="align-middle">Forms</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/cards"
                        >
                            <i className="align-middle" data-feather="grid"></i>
                            <span className="align-middle">Cards</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/typography"
                        >
                            <i className="align-middle" data-feather="align-left"></i>
                            <span className="align-middle">Typography</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/icons"
                        >
                            <i className="align-middle" data-feather="coffee"></i>
                            <span className="align-middle">Icons</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-header">Plugins & Addons</li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/charts"
                        >
                            <i className="align-middle" data-feather="bar-chart-2"></i>
                            <span className="align-middle">Charts</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                            to="/maps"
                        >
                            <i className="align-middle" data-feather="map"></i>
                            <span className="align-middle">Maps</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="sidebar-cta">
                    <div className="sidebar-cta-content">
                        <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                        <div className="mb-3 text-sm">
                            Are you looking for more components? Check out our premium version.
                        </div>
                        <div className="d-grid">
                            <NavLink to="/upgrade-to-pro" className="btn btn-primary">Upgrade to Pro</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
