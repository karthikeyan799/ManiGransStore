import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Discount from './Components/Discount'
import Category from './Components/Category'
import LuxuryCollection from './Components/LuxuryCollection'
import Footer from './Components/Footer'
import ModernCollection from './Components/ModernCollection'
import FastSelling from './Components/FastSelling'
import SpecialOfferse from './Components/SpecialOfferse'
import Catagory2 from './Components/Catagory2'
import CatagoryList from './Components/CatagoryList'
import FullBody from './Components/FullBody'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Women from './NavList/Women'
import Men from './NavList/Men'
import Kids from './NavList/Kids'
import Cart from './NavList/Cart'
import Contact from './NavList/Contact'
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    // <div className='container-flui'>
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<FullBody />} />
          <Route path='/men' element={<Men/> } />
          <Route path='/women' element={<Women/> } />
          <Route path='/kids' element={ <Kids/>} />
          <Route path='/cart' element={ <Cart/>} />
          <Route path='/contact' element={<Contact/> } />
          {/* <Route path='/' element={ } /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
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
