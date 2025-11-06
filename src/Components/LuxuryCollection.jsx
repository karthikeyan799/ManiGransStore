import React from 'react'
// import '../App.css';
import '../Components/LuxuryCollection.css'
export default function LuxuryCollection() {
    return (
        <div className='my5'>
            <h6 className='text-center text-success'>OUR BEST COLLECTIONS</h6>
            <h1 className='text-center title'>CHOOSE OUR  LUXURIOUS COLLECTIONS</h1>
            <hr />
            <div className=' d-flex luxury my-5 '>
                <div className='col samudrika'>
                    <div className='samudrikaImg'></div>
                    {/* <img src="../src/assets/Mani shop/samu.jpeg" alt="" /> */}
                    <div className='samudrikaContent'>
                        <h6>STARTING FROM <i className='bi bi-currency-rupee'></i>44,000.00</h6>
                        <h5 className='my-3'>SAMUDRIKA <span>SILK</span> SAREE</h5>
                        <p>Maroon floral zari design samudrika silk saree with contrast intricate zari design border & floral zari design pallu </p>
                        <button className='learnMoreDiscount px-4'>LEARN MORE</button>
                    </div>
                </div>
                <div className='col bg-dange silkDiv'>
                    <div className='silk col text-center'>
                        <div className='silkImg1'></div>
                        {/* <img src="../src/assets/Mani shop/elite1.png" alt="image1" /> */}
                        <h5 className='mt-4'> <b> ELITE <span className='text-warning'>SILK</span></b> SAREE</h5>
                        <p className='text-center'>Maroon checked Vasundhare elite silk saree </p>
                        <h6 className='text-black'><i className='bi bi-currency-rupee'></i>7,500,00</h6>
                        {/* <h5><i className='bi bi-currency-rupee'></i>7,500,00</h5> */}
                        <button className='learnMoreDiscount'>LEARN MORE</button>
                    </div>
                    <div className='silk col text-center'>
                        <div className='silkImg2'></div>
                        {/* <img src="../src/assets/Mani shop/parampara1.png" alt="image2" /> */}
                        <h5 className='mt-4'><b> PARAMPARA <span className='text-warning'>SILK</span></b></h5>
                        <p className='text-center'>Brown checked silk saree with self border of thilakam mokku  </p>
                        <h6 className='text-black'><i className='bi bi-currency-rupee '></i>8,500,00</h6>
                        <button className='learnMoreDiscount'>LEARN MORE</button>
                        {/* <h5><i className='bi bi-currency-rupee'></i>8,500,00</h5> */}
                        {/* <button className='learnMore'>LEARN MORE</button> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
