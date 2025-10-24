import React from 'react'

export default function LuxuryCollection() {
    return (
        <div className=''>
            <h6 className='text-center text-success'>OUR BEST COLLECTIONS</h6>
            <h1 className='text-center title'>CHOOSE OUR  LUXURIOUS COLLECTIONS</h1>
            <hr />
            <div className='copy d-flex luxury'>
                <div className='col samudrika'>
                    <img src="../src/assets/Mani shop/samu.jpeg" alt="" />
                </div>
                <div className='col bg-dange silkDiv'>
                    <div className='silk col text-center'>
                        <img src="../src/assets/Mani shop/elite1.png" alt="image1" />
                        <h5 className='mt-2'>ELITE <span className='text-warning'>SILK</span> SAREE</h5>
                        <p>Maroon checked Vasundhare elite silk saree <h6 className='text-black'><i className='bi bi-currency-rupee'></i>7,500,00</h6></p>
                        {/* <h5><i className='bi bi-currency-rupee'></i>7,500,00</h5> */}
                        <button className='learnMore'>LEARN MORE</button>
                    </div>
                    <div className='silk col text-center'>
                        <img src="../src/assets/Mani shop/parampara1.png" alt="image2" />
                        <h5>PARAMPARA <span className='text-warning'>SILK</span></h5>
                        <p>Brown checked silk saree with self border of thilakam mokku<h6 className='text-black'><i className='bi bi-currency-rupee '></i>8,500,00</h6> <button className='learnMore'>LEARN MORE</button></p>
                        {/* <h5><i className='bi bi-currency-rupee'></i>8,500,00</h5> */}
                        {/* <button className='learnMore'>LEARN MORE</button> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
