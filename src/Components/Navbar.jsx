import React from 'react'

export default function Navbar() {
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
            <nav className='container-fluid cont bg-dak'>
                <img src="../src/assets/Mani shop/mani-textile-logo-C.png" alt="" />
                <ul className='nav text-black'>
                    <li className="nav-list">HOME</li>
                    <li className="nav-list">MEN</li>
                    <li className="nav-list">WOMEN</li>
                    <li className="nav-list">KIDS</li>
                    <li className="nav-list">CART</li>
                    <li className="nav-list">CONTANT</li>
                </ul>
            </nav>
        </>
    )
}
