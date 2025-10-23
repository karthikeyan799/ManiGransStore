import React from 'react'

export default function SpecialOfferse() {
    return (

        <div className='container my-4 special '>
            <div className='col-3 specialImage'>
                <img src=".././src/assets/Mani shop/specialOffer.jpeg" alt="special image" className='' />
            </div>
            <div className='col-7 specialContent'>
                <h6 className='text-warning'>SPECIAL OFFERCE FOR SUBSCRIBERS</h6>
                <h1 className='my-4'>NEW OFFERS EVERY WEEK + DISCOUNT OFF FROM 20% + BEST HOT PRICES</h1>
                <p className='my-4'>Join our subscriber list and unlock exclusive discounts , early access to new arrivals, and special festive offerce available only to our community</p>
                <div className='py-3 mail'>
                    <input type="text" className='border' placeholder='Enter your email' name="" id="" />
                    <button className='' style={{letterSpacing:"3px"}}>SUBMIT</button>
                </div>
            </div><hr />
        </div>

    )
}
