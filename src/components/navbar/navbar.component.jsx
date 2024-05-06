import { Outlet, Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

import './navbar.styles.scss'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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

                    <div className="nav-toggle" onClick={toggleMenu}>
                        <IoMenu />
                    </div>

                    
                </div>
            </div>
            {isOpen && (
                <div className="dropdown-links">
                    <div className='h-line'></div>
                    <Link className="nav-link" to='/' onClick={toggleMenu}>
                        Introduction
                    </Link>
                    <div className='h-line'></div>
                    <Link className="nav-link" to='/performance' onClick={toggleMenu}>
                        Performance
                    </Link>
                    <div className='h-line'></div>
                    <Link className="nav-link" to='/pricing' onClick={toggleMenu}>
                        Pricing
                    </Link>
                    <div className='h-line'></div>
                    <Link className="nav-link" to='/auth' onClick={toggleMenu}>
                        Sign In
                    </Link>
                    <div className='h-line'></div>
                </div>
            )}
            <Outlet/>
        </Fragment>
    )
}

export default Navbar;