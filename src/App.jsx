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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
     <Navbar/>
     <Body/>
     <Discount/>
     <Category/>
     <LuxuryCollection/>
     <ModernCollection/>
     <FastSelling/>
     <SpecialOfferse/>
     <Footer/>
    </div>
  )
}

export default App
