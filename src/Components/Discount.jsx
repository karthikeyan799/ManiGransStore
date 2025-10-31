import React from 'react'
import '../App.css';
export default function Discount() {
    return (
        <div className='my-3 p-3 discount'>
            <h6 className='text-center text-success'>SPECIAL OFFERS</h6>
            <h1 className='text-center title'>50% DISCOUNT FOR LATEST TRENDS</h1>
            <hr className='hr'
            />
            <div className='d-flex gap-5 disContainer discountBody'>
                <div className='col-xl-6 b-dark discountImg'>
                    <div className='discountImg1'></div>
                    <div className='discountImage'></div>
                    {/* <img src="../src/assets/Mani shop/discount.png" alt="" />
                    <img src="../src/assets/Mani shop/discount1.png" className='discountImage' alt="" /> */}
                </div>
                <div className='col-xl-4 bgdanger discountCon py-4'>
                    <h5> <b> PURE SILK SAREE <span>+</span>SILK DHOTIS <span>+</span> FREE DELIVERY</b></h5>
                    <h5><b>BEST PRICE:</b><span className='text-warning'><i className='bi bi-currency-rupee'></i>2,500.00</span></h5>
                    <div className='d-flex py-4 gap-4 dates'>
                        <div className='d-flex date' >
                            <h5>20</h5>
                            <p>DAYS</p>
                        </div>
                        <div className='d-flex date'>
                            <h5>19</h5>
                            <p>HOURS</p>
                        </div>
                        <div className='d-flex date'>
                            <h5>37</h5>
                            <p>MIN</p>
                        </div>
                        <div className='d-flex date'>
                            <h5>08</h5>
                            <p>SEC</p>
                        </div>
                    </div>
                    <p className='py-4'>Discover elegance at half trhe price! Shop our exclusive collection of premium silk dhotis and sarees now available at 50% OFF.</p>
                    <button className='learnMore'>LEARN MORE</button>
                    <button className='addToCart'>ADD TO CART</button>

                </div>
            </div>
        </div>
    )
}
