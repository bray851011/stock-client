import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import './navbar.styles.scss'

const Navbar = () => {
    return (
        <Fragment>
            <div className="navbar-container">
                <div className="navigation">
                    <div className="logo-container">
                        <Link className="nav-link" to='/'>
                            The Stock Spotter
                        </Link>
                    </div>
                    
                    <div className="links-container">
                        <Link className="nav-link" to='/'>
                            Introduction
                        </Link>
                        <Link className="nav-link" to='/performance' >
                            Performance
                        </Link>
                        <Link className="nav-link" to='/pricing'>
                            Pricing
                        </Link>
                        <Link className="nav-link" to='/auth'>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navbar;