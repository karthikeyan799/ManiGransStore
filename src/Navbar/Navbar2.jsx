import React from 'react'
import './Navbar2.css'
export default function Navbar2() {
    
  return (
    <div className='navMnu'>
            <nav className='navbar navbar-exad-sm border  '>
                <ul className='nav'>
                    <li className='nav-list border'>CONTACT US:9600184966</li>
                    <li className='nav-list border'>EMAIL:MANITEXTILESTHEGRANDSTORE@GMAIL.COM</li>

                </ul>
                <ul className='nav'>
                    <li className='nav-list border'>LOGIN OR REGISTER</li>
                    <li className='nav-list border'>YOUR BAG <span className='batch'>0</span></li>
                </ul>
            </nav>
            <nav className='container-fluid  border'>
                <div className='contImg'></div>
                {/* <img src="../src/assets/Mani shop/mani-textile-logo-C.png" alt="" /> */}
                <ul className='nav text-black ' id=''>
                    <li className="nav-item">home
                        {/* <Link className='items' to={'/'} >HOME</Link> */}
                    </li>
                    <li className="nav-item">men
                        {/* <Link className='items' to={'/men'}>MEN</Link> */}
                    </li>
                    <li className="nav-item">women
                        {/* <Link className='items' to={'/women'}>WOMEN</Link> */}
                    </li>
                    <li className="nav-item">kids
                        {/* <Link className='items' to={'/kids'}>KIDS</Link> */}
                    </li>
                    <li className="nav-item">cart
                        {/* <Link className='items' to={'/cart'}>CART</Link> */}
                    </li>
                    <li className="nav-item">contact
                        {/* <Link className='items' to={'/contact'}>CONTANT</Link> */}
                    </li>
                </ul>
                {/* <button id='menu-open-button' className='fa fa-bars mx-3 p-3'></button> */}
            </nav>
            <button id='menu-open-button' className='fa fa-bars mx-3 p-3'></button>
        </div>

  )
}
