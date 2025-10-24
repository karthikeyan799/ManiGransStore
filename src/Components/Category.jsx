import React from 'react'
import '../App.css';
export default function Category() {
    return (
        <div className='my-5 category'>
            <h6 className='text-center text-success'>NEW ARRIVALS</h6>
            <h1 className='text-center'>BROWSE OUR CATEGORIES</h1>
            <hr />
            <div className='d-flex all mx2 my-4'>
                <ul className='nav gap-3'>
                    <li className='nav-list round'>ALL</li> 
                    <li className='nav-list round '>SILK SAREE</li>
                    <li className='nav-list round '>KIDS + MENS</li>
                    <li className='nav-list round'>CHUDIDHAR</li>
                    <li className='nav-list round '>KURTHI</li>
                    <li className='nav-list '>COAT SUITS</li>
                </ul>

            </div>
            <div className='d-flex allContent'>
                <div className='saree border col text-center'>
                    <img src="../src/assets/Mani shop/swarovski1.png" style={{ height: "300px" }} alt="" />
                    <h6 >SILK SAREES</h6  >
                    <h5>SWAROVSKI SAREE</h5>
                    <p>Elevate your look with our elegant Silk saree - perfect for any special occasion </p>
                    <span><i className='bi bi-currency-rupee'></i>1,790</span>
                </div>
                <div className='saree border col text-center'>
                    <img src="../src/assets/Mani shop/kurta.png" style={{ height: "300px" }} alt="" />
                    <h6 >FULL SLEEVE KURTA</h6 >
                    <h5>KURTA & CONTRAST PATIALA-STYLE PANTS</h5>
                    <p>Pale orange pure silk nawabi suit features intricate jacquard design full-sleeve</p>
                    <span><i className='bi bi-currency-rupee'></i>3,059</span>

                </div>
                <div className='saree border col text-center'>
                    <img src="../src/assets/Mani shop/gownkurta.png" style={{ height: "300px" }} alt="" />
                    <h6 >KIDS WEAR</h6   >
                    <h5>GOWN + KURTHA</h5>
                    <p>Green tropical floral printed & embroidered ala-neck 3/4th sleeve gown</p>
                    <span><i className='bi bi-currency-rupee'></i>3,420</span>

                </div>
                <div className='saree border col text-center'>
                    <img src="../src/assets/Mani shop/pinkmaterial1.png" style={{ height: "300px" }} alt="" />
                    <h6 >CHUDIDHAR</h6   >
                    <h5>PINK MATERIAL CHUDIDHAR CATALOG SET</h5>
                    <p>Pink material chudidhar catalog set embroidered georgette top</p>
                    <span><i className='bi bi-currency-rupee'></i>999</span>

                </div>
                <div className='saree border col text-center'>
                    <img src="../src/assets/Mani shop/combo1.png" style={{ height: "300px" }} alt="" />
                    <h6 >DESIGNED SAREES</h6 >
                    <h5>IKKAT DESIGN SAREE</h5>
                    <p>Multi-colour Ikkat Tussar saree with contrast border and striped pallu--vibrant and elegant</p>
                    <span><i className='bi bi-currency-rupee'></i>2,665</span>

                </div>
            </div>

        </div>
    )
}
