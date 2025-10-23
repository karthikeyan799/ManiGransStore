import React from 'react'

export default function Discount() {
    return (
        <div className='p-3 discount'>
            <h6 className='text-center text-success'>SPECIAL OFFERS</h6>
            <h1 className='text-center title'>50% DISCOUNT FOR LATEST TRENDS</h1>
            <hr className='hr'
            //  style={{
            //     backgroundColor:"red",
            //     padding:"2px",
            //     margin:"auto",
            //     // justifyContent:"center",
            //     // color:"green",
            //     width:"4%"
            // }}
            />
            <div className='d-flex gap-5 disContainer discountBody'>
                <div className='col-6 b-dark discountImg'>
                    <img src="../src/assets/Mani shop/Mani-Textile_files/discount.png" alt="" />
                    <img src="../src/assets/Mani shop/Mani-Textile_files/discount1.png" className='discountImage' alt="" />
                </div>
                <div className='col-4 b-danger discountCon py-4'>
                    <h5> <b> PURE SILK SAREE <span>+</span>SILK DHOTIS <span>+</span> FREE DELIVERY</b></h5>
                    <h5><b>BEST PRICE:</b><span className='text-warning'><i className='bi bi-currency-rupee'></i>2,500.00</span></h5>
                    <div className='d-flex py-4 gap-4'>
                        <div className='d-flex date' >
                            <div className='col'><h4>20</h4></div>
                            <div className='col' > <h3>DAYS</h3></div>
                        </div>
                        <div className='d-flex date'>
                            <h4>19</h4>
                            <p>HOURS</p>
                        </div>
                        <div className='d-flex date'>
                            <h4>37</h4>
                            <h3>MIN</h3>
                        </div>
                        <div className='d-flex date'>
                            <h4>08</h4>
                            <h3>SEC</h3>
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
