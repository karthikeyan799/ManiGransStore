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
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className='container-flui'>
      <Navbar />
      <Body />
      <Discount />
      {/* <CatagoryList /> //reason*/}
      {/* <Catagory2/> */}
      {/* <Category/> */}
      {/* <LuxuryCollection />
      <ModernCollection />
      <FastSelling />
      <SpecialOfferse /> */}
      <Footer />
    </div>
  )
}

export default App
