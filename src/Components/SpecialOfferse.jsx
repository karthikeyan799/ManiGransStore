import React from 'react'
import '../App.css';
export default function SpecialOfferse() {
    return (

        <div className='container my-1 special '>
            <div className='col-xl-3 specialImage my-4'>
                {/* <img src=".././src/assets/Mani shop/specialOffer.jpeg" alt="special image" className='' /> */}
                {/* <div className='overlay'>
                    <h3>image</h3>
                    <p>welcome</p>
                </div> */}
            </div>
            <div className='col-xl-6 specialContent'>
                <h6 className='text-warning'>SPECIAL OFFERCE FOR SUBSCRIBERS</h6>
                <h3 className='my-4'>NEW OFFERS EVERY WEEK + DISCOUNT OFF FROM 20% + BEST HOT PRICES</h3>
                <p className='my-4'>Join our subscriber list and unlock exclusive discounts , early access to new arrivals, and special festive offerce available only to our community</p>
                <div className='py-3 mail'>
                    <input type="text" className='border' placeholder='Enter your email' name="" id="" />
                    <button className='' style={{ letterSpacing: "3px" }}>SUBMIT</button>
                </div>
            </div>
            {/* <hr /> */}
        </div>

    )
}
