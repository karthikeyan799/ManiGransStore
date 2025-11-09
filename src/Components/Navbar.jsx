import React, { useEffect, useState } from 'react'
import '../App.css';

import { Link, useLocation } from 'react-router-dom'
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation();
    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen)
    // }

    // const closeMenu = () => {
    //     setIsMenuOpen(false)
    // }
    useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    useEffect(() => {
        if (!isMenuOpen) return

        const handleClickOutside = (event) => {
            if (!event.target.closest('.contUl')) {
                setIsMenuOpen(false)
                console.log("click out side ...")
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuOpen])

    const isActive = (path) => {
        return location.pathname === path ? 'active' : ''
    }
    const clickOut = (e) => {
        document.body.classList.remove('show-mobile-menu');
        setIsMenuOpen(false)
        // console.log(e.target.closest('.contUl'));
    }
    const openBtn = () => {
        document.body.classList.toggle("show-mobile-menu");
        setIsMenuOpen(!isMenuOpen)
    }
    useEffect(() => {
        const menuOpenButton = document.getElementById("menu-open-button"); // no '#'
        const menuClose = document.getElementById("menu-close-button");

        const toggleMenu = () => {
            document.body.classList.toggle('show-mobile-menu');
        };

        if (menuOpenButton) {
            menuOpenButton.addEventListener("click", toggleMenu
                //         () => {
                // navmenu.classList.add()}
            );
            setIsMenuOpen(!isMenuOpen)
        }


        if (menuClose) {
            menuClose.addEventListener("click", toggleMenu);

        }

        // Cleanup to remove event listener when component unmounts
        return () => {
            if (menuOpenButton) {
                // menuOpenButton.removeEventListener
                menuOpenButton.removeEventListener("click", toggleMenu);
                setIsMenuOpen(!isMenuOpen)
            } else {
                // close.removeEventListener("click",toggleMenu);
            }


            // if (menuClose) {
            //     menuClose.addEventListener("click", toggleMenu);

            // }
        };
    }, []);
    return (

        <div className='navMenu'>
            {/* <div className='navs'> */}
            <nav className='navbar navbar-exad-sm border  line '>
                <ul className='nav'>
                    <li className='nav-list border'>CONTACT US:9600184966</li>
                    <li className='nav-list border'>EMAIL:MANITEXTILESTHEGRANDSTORE@GMAIL.COM</li>

                </ul>
                <ul className='nav'>
                    <li className='nav-list border'>LOGIN OR REGISTER</li>
                    <li className='nav-list border'>YOUR BAG <span className='batch'>0</span></li>
                </ul>
            </nav>
            <nav className='container-fluid cont border px-5'>
                <div className='contImg'></div>
                {/* <img src="../src/assets/Mani shop/mani-textile-logo-C.png" alt="" /> */}
                <div className='contUl'>
                    <ul className='nav'>
                        <div className='contImg my-4'></div>
                        <li className='nav-item border'>
                            <Link className='items' onClick={clickOut} >Login</Link>

                            {/* LOGIN OR REGISTER */}
                        </li>
                        <li className='nav-item border'>
                            <Link className='items' onClick={clickOut}>Register</Link>
                        </li>
                        {/* <li className='nav-item border'>
                            <Link className='items'>
                                YOUR BAG <span className='batch'>0</span>
                            </Link></li> */}
                    </ul>
                    {/* <ul className='nav text-black ' id=''> */}
                        <ul className={ `nav text-black nav-men ${isMenuOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <Link
                                 to={'/'} className='items' onClick={clickOut}
                            //   id='link' className='items' onClick={clickOut}
                            //  className='' onClick={clickOut} 
                            >HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`items ${isActive('/men')}`} onClick={clickOut} to={'/men'}>MEN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`items ${isActive('/women')}`} onClick={clickOut} to={'/women'}>WOMEN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`items ${isActive('/kids')}`} onClick={clickOut} to={'/kids'}>KIDS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='items' onClick={clickOut} to={'/cart'}>CART</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='items' onClick={clickOut} to={'/contact'}>CONTANT</Link>
                        </li>
                    </ul>
                </div>
                <button className="menu-toggle"  aria-label="Toggle menu"
                    // id='menu-open-button' className='fa f-bars mx-3 p-3' 
                    onClick={openBtn} >
                    <span style={{
                        transform: isMenuOpen ? `rotate(45deg) translate(5px, 5px)` : `none`
                    }}></span>
                    <span style={{
                        opacity: isMenuOpen ? 0 : 1
                    }}></span>
                    <span style={{
                        transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
                    }}></span>
                </button>
            </nav >
            {/* <button id='menu-open-button' className='fa fa-bars mx-3 p-3'></button> */}
            {/* </div> */}
            {/* <button id='menu-open-button' className='fa fa-bars mx-3 p-3'></button> */}

        </div >

    )
}
