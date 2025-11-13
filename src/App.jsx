import { useState } from 'react'
import "react-toastify/dist/ReactToastify.css"
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import FullBody from './Components/FullBody'
import { Routes, Route } from 'react-router-dom'
import Women from './NavList/Women'
import Men from './NavList/Men'
import Kids from './NavList/Kids'
import Cart from './NavList/Cart'
import Contact from './NavList/Contact'
import Product from './NavList/Product'
import Login from './NavList/Login'
import { ToastContainer } from 'react-toastify'
import Registration from './NavList/Registration'

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    // <div className='container-flui'>

    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<FullBody />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
      <Footer />


      {/* <FullBody /> */}
      {/* <Body />
      <Discount />
      <CatagoryList /> 
    
      <LuxuryCollection />
      <ModernCollection />
      <FastSelling />
      <SpecialOfferse /> */}

      {/* // </div> */}
    </>

  )
}

export default App
