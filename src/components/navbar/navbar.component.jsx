import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { AiOutlineStock } from "react-icons/ai";

import './navbar.styles.scss'

const Navbar = () => {
    return (
        <Fragment>
            <div className="navbar-container">
                <div className="navigation">
                    <div className="logo-container">
                        <Link className="nav-link" to='/'>
                            <AiOutlineStock className="logo"/>
                            <span>Stock Spotter</span>
                        </Link>
                    </div>
                    
                    <div className="links-container">
                        <div className='v-line'></div>
                        <Link className="nav-link" to='/'>
                            Introduction
                        </Link>
                        <div className='v-line'></div>
                        <Link className="nav-link" to='/performance' >
                            Performance
                        </Link>
                        <div className='v-line'></div>
                        <Link className="nav-link" to='/pricing'>
                            Pricing
                        </Link>
                        <div className='v-line'></div>
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