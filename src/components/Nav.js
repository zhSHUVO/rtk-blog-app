import React from "react";
import { Link } from "react-router-dom";
import lwsblog from "../images/LWSBlog.svg";

const Nav = () => {
    return (
        <div>
            <nav className="py-4 border-b">
                <div className="navbar-container">
                    <div className="logo">
                        <Link to={"/"}>
                            <img src={lwsblog} alt="lws logo" />
                        </Link>
                    </div>
                    <div className="auth-buttons">
                        <button className="btn btn-primary">sign in</button>
                        <button className="btn btn-outline">sign up</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
