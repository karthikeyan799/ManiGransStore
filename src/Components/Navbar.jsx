import React, { useEffect } from 'react'
import '../App.css';

import { Link } from 'react-router-dom'
export default function Navbar() {
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
        }
        if (menuClose) {
            menuClose.addEventListener("click", toggleMenu);
        }

        // Cleanup to remove event listener when component unmounts
        return () => {
            if (menuOpenButton) {
                menuOpenButton.removeEventListener("click", toggleMenu);
            }
            if (menuClose) {
                menuClose.addEventListener("click", toggleMenu);

            }
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
                        <li className='nav-item border lr'>
                            <Link className='items'>Login</Link>
                            <Link className='items'>Register</Link>
                            {/* LOGIN OR REGISTER */}
                        </li>
                        {/* <li className='nav-item border'>
                            <Link className='items'>
                                YOUR BAG <span className='batch'>0</span>
                            </Link></li> */}
                    </ul>
                    <ul className='nav text-black ' id=''>
                        <li className="nav-item">
                            <Link className='items' to={'/'} >HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='items' to={'/men'}>MEN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='items' to={'/women'}>WOMEN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='items' to={'/kids'}>KIDS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='items' to={'/cart'}>CART</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='items' to={'/contact'}>CONTANT</Link>
                        </li>
                    </ul>
                </div>
                <button id='menu-open-button' className='fa fa-bars mx-3 p-3'></button>
            </nav >
            {/* <button id='menu-open-button' className='fa fa-bars mx-3 p-3'></button> */}
            {/* </div> */}
            {/* <button id='menu-open-button' className='fa fa-bars mx-3 p-3'></button> */}

        </div >

    )
}
