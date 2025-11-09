import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar2 from './Navbar/Navbar2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Navbar2/> */}
  </StrictMode>,
)
