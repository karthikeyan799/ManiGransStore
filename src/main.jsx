import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar2 from './Navbar/Navbar2.jsx'
import { Provider } from 'react-redux'
import  {store } from './Slices/store.js'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Navbar2/> */}
  </Provider>
  // {/* </StrictMode>, */}
)
