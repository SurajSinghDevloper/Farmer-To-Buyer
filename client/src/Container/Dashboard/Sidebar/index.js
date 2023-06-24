import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                {/* Your logo */}
            </div>
            <h3>Side Bar</h3>
            <ul className="nav-links">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link btns">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link btns">
                        Cart
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop" className="nav-link btns">
                        Shop
                    </Link>
                </li>
                {/* Add sidebar items here */}
            </ul>
        </div>
    );
};

export default Sidebar;
