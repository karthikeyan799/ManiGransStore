import React, { useEffect, useState } from 'react'
import '../App.css';

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getTotal, logout } from '../Slices/ManiSlice';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isBtn, setIsBtn] = useState(false)
    const location = useLocation();
    const cartItems = useSelector(state => state.mani.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(cartItems.length);
    const user = useSelector(state => state.mani.user);
    // const { cartTotalQuantity } = useSelector(state => state.mani)
    const cart = useSelector(state => state.mani)
    const handleLogout = () => {
        dispatch(logout());
        navigate('/')

    }
    useEffect(() => {
        dispatch(getTotal())
    }, [cartItems, dispatch])


    const isActive = (path) => {
        return location.pathname === path ? 'active' : ''
    }
    const clickOut = (e) => {
        document.body.classList.remove('show-mobile-menu');
        // setIsMenuOpen(false)
        setIsBtn(isMenuOpen)
    }
    const openBtn = () => {
        document.body.classList.toggle("show-mobile-menu");
        // setIsMenuOpen(!isMenuOpen)
        setIsBtn(!isBtn)
        console.log("open btn clicked...")
    }
    useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    useEffect(() => {
        if (!isBtn) return

        const handleClickOutside = (event) => {
            if (!event.target.closest('.contUl')) {
                // setIsMenuOpen(false)
                document.body.classList.remove('show-mobile-menu');
                setIsBtn(false)
                console.log("click out side ...")
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isBtn])

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
            <nav className='navbar  border  line '>
                <ul className='nav'>
                    <li className='nav-list border'>CONTACT US:9600184966</li>
                    <li className='nav-list border'>EMAIL:MANITEXTILESTHEGRANDSTORE@GMAIL.COM</li>

                </ul>
                <ul className='nav'>
                    {user ? (
                        <>

                            <li className='nav-list'>My Orders {user ? user.name : ""}</li>
                            <li className='nav-list'>
                                <Link className='item' to={"/cart"}>Cart</Link>
                            </li>
                            <li className='nav-list'> <Link onClick={(e) => handleLogout(e)}>Logout</Link></li>
                            <li className='nav-list border'><Link to={"/cart"}>YOUR BAG </Link><span className='bath'>
                                {/* {cartItems.length}   */}
                                {/* {cartTotalQuantity} */}
                                {cart.cartTotalQuantity}
                            </span></li></>
                    ) : (
                        <li className='nav-list border'>
                            <Link to={"/login"} >LOGIN</Link> OR <Link to={"/registration"}>REGISTER</Link>
                        </li>
                    )}
                </ul>

            </nav>
            <nav className='container-fluid cont border px-4 px-lg-5'>
                <div className='contImg'></div>
                {/* <img src="../src/assets/Mani shop/mani-textile-logo-C.png" alt="" /> */}


                <div className='contUl d-flex align-items-center'>
                    {/* <nav className='navbar'> */}
                    <nav className={`navbar d-sm-flex d-md-flex d-lg-flex `} id="idToggle">
                        {/* <ul className={`nav text-black nav-menu ${isMenuOpen ? 'active' : ''}`}> */}
                        {/* <ul className={`nav text-black nav-menu ${isMenuOpen ? 'active' : ''}`}>
                            <div className='contImg my-4'></div>
                            <li className='nav-item border'>
                                <Link className='items' onClick={clickOut} >Login</Link>

                            </li>
                            <li className='nav-item border'>
                                <Link className='items' onClick={clickOut}>Register</Link>
                            </li>

                        </ul> */}
                        {/* <ul className='nav text-black ' id=''> */}
                        <ul className={`nav text-black nav-menu ${isMenuOpen ? 'active' : ''}`}>
                            <ul className='nav d-sm-flex d-md-flex d-lg-none'>
                                <div className='contImg my-4'></div>
                                {user ? (
                                    <>

                                        <li className='nav-list'>My Orders {user ? user.name : ""}</li>
                                        {/* <li className='nav-item'>
                                            <Link className='items' to={"/cart"}>Cart</Link>
                                        </li> */}
                                        <li className='nav-item'> <Link className='items' onClick={(e) => handleLogout(e)}>Logout</Link></li>
                                        <li className='nav-item border'><Link to={"/cart"} onClick={clickOut} className='items'>YOUR BAG <span className='bath'>
                                            {/* {cartItems.length}   */}
                                            {/* {cartTotalQuantity} */}
                                            {cart.cartTotalQuantity}
                                        </span></Link></li>
                                    </>) : (<>
                                        <li className='nav-item border'>
                                            <Link className='items' onClick={clickOut} to={"/login"} >Login</Link>

                                        </li>
                                        <li className='nav-item border'>
                                            <Link className='items' onClick={clickOut} to={"/registration"}>Register</Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                            <li className="nav-item">
                                <Link
                                    to={'/'} className={`items ${isActive('/')}`} onClick={clickOut}
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
                                <Link className={`items ${isActive('/cart')}`} onClick={clickOut} to={'/cart'}>CART</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`items ${isActive('/contact')}`} onClick={clickOut} to={'/contact'}>CONTANT</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="menu-toggle d-sm-flex d-md-flex d-lg-none" aria-label="Toggle menu"
                        // id='menu-open-button'       className='fa f-bars mx-3 p-3' 
                        onClick={openBtn}
                    >
                        <span style={{
                            transform: isBtn ? `rotate(45deg) translate(5px, 5px)` : `none`
                        }}></span>
                        <span style={{
                            opacity: isBtn ? 0 : 1
                        }}></span>
                        <span style={{
                            transform: isBtn ? 'rotate(-45deg) translate(7px, -7px)' : 'none'
                        }}></span>
                    </button>
                </div>


            </nav >
            {/* <button id='menu-open-button' className='fa fa-bars mx-3 p-3'></button> */}
            {/* </div> */}
            {/* <button id='menu-open-button' className='fa fa-bars mx-3 p-3'></button> */}

        </div >

    )
}
