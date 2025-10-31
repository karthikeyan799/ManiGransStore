import React from 'react'
import '../App.css';
export default function ModernCollection() {
    return (
        <div className='modern'>
            <div className='d-flex copy1 mod text-white my-5 gap-2'>

                <div className='col modernColl text-center d-flex'>
                    <div className='col-6 modernKids'>
                        <img src=".././src/assets/Mani shop/kutchild.png" alt="" />
                    </div>
                    <div className='col-4 modernChild'>
                        <img src=".././src/assets/Mani shop/kutchild.png" alt="img1" />
                        <img src=".././src/assets/Mani shop/kutchild.png" alt="img2" />
                        <img src=".././src/assets/Mani shop/kutchild.png" alt="img3" />
                    </div>
                </div>

                <div className='col collection'>
                    <h6><b> MODERN COLLECTION</b></h6>
                    <h1>FOR CHILDRENS</h1>
                    <p className='dis'>Discover our Modern Collection for Children--a curated range of stylish,comfortable, and trend-forword clothing and accessories designed for today's kids.</p>
                        {/* <tr>
                     <td>2000+ New Design</td>
                       <td>50% offer for new members</td>
                      </tr>
                       <tr>
                       <td>10 lakhs parents delighted</td>
                       <td>125 Rs offer on order above 999 Rs</td>
                        </tr> */}
                    <div className='d-flex gap-5'>
                        <div className='my-3'>
                            <p className='para '><i className='bi bi-check'></i>2000+ New Design

                            </p>
                            <p>
                                <i className='bi bi-check'></i>10 lakhs parents delighted

                            </p>
                            <p>
                                <i className='bi bi-check'></i>500 new style every month
                            </p>
                        </div>
                        <div className='my-3'>
                            <p className='para '>
                                <i className='bi bi-check'></i>50% offer for new members </p>
                            <p>  <i className='bi bi-check'></i>125 Rs offer on order above 999 Rs
                            </p>
                            <p>
                                <i className='bi bi-check'></i>24*7 customer support
                            </p>
                        </div>
                    </div>
                    <h5 className='text-warning'>BEST PRICE: <i className='bi bi-currency-rupee '></i>195.00</h5>
                    <button className='learnMore bg-white text-black px-5 py-3'>LEARN MORE</button>
                    <button className='learnMore bg-dark px-5 m-2 py-3'>ADD TO CART</button>
                </div>
            </div>
        </div >
    )
}
