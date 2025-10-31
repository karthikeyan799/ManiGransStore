import React, { useEffect } from 'react'
import '../App.css';
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
        <>
            <nav className='navbar border line contain hadow '>
                <ul className='nav'>
                    <li className='nav-list border'>CONTACT US:9600184966</li>
                    <li className='nav-list border'>EMAIL:MANITEXTILESTHEGRANDSTORE@GMAIL.COM</li>

                </ul>
                <ul className='nav'>
                    <li className='nav-list border'>LOGIN OR REGISTER</li>
                    <li className='nav-list border'>YOUR BAG <span className='batch'>0</span></li>
                </ul>

            </nav>
            {/* <hr /> */}
            <nav className='container-fluid cont bg-drk'>
                <img src="../src/assets/Mani shop/mani-textile-logo-C.png" alt="" />
                <ul className='nav text-black ' id=''>
                    <li className="nav-list">HOME</li>
                    <li className="nav-list">MEN</li>
                    <li className="nav-list">WOMEN</li>
                    <li className="nav-list">KIDS</li>
                    <li className="nav-list">CART</li>
                    <li className="nav-list">CONTANT</li>
                </ul>
                <button id='menu-open-button' className='fa fa-bars mx-3 p-3'></button>

            </nav>

        </>
    )
}
