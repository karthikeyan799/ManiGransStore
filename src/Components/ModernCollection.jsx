import React from 'react'
import '../App.css';
export default function ModernCollection() {
    return (
        <div className='modern'>
            <div className='d-block co mo d-md-flex  justify-content-center  justify-content-sm-center align-item-sm-center text-white my-5 px-5 mx-4 gap-2'>

                <div className='col col-sm12  col-md12 modernColl text-center d-flex col-md-6 '>
                    <div className='col-6 col-md-5 modernKids bg-d'>
                        {/* <div className='modernKidsImg'></div> */}
                        {/* <img src=".././src/assets/Mani shop/kutchild.png" alt="" /> */}
                    </div>
                    <div className='col-4 col-md12 modernChild '>
                        <div className='modernChildImg'></div>
                        <div className='modernChildImg'></div>
                        <div className='modernChildImg'></div>
                        {/* <img src=".././src/assets/Mani shop/kutchild.png" alt="img1" />
                        <img src=".././src/assets/Mani shop/kutchild.png" alt="img2" />
                        <img src=".././src/assets/Mani shop/kutchild.png" alt="img3" /> */}
                    </div>
                </div>

                <div className='col col-sm12 col-md-7  collection'>
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
                        <div className='my-3 paradiv'>
                            <p className='para '><i className='bi bi-check'></i>2000+ New Design

                            </p>
                            <p className=''>
                                <i className='bi bi-check'></i>10 lakhs parents delighted

                            </p>
                            <p>
                                <i className='bi bi-check'></i>500 new style every month
                            </p>
                        </div>
                        <div className='my-3 paraHide paradiv'>
                            <p className='para '>
                                <i className='bi bi-check'></i>50% offer for new members </p>
                            <p className=''>  <i className='bi bi-check'></i>125 Rs offer on order above 999 Rs
                            </p>
                            <p>
                                <i className='bi bi-check'></i>24*7 customer support
                            </p>
                        </div>
                    </div>
                    <h5 className='text-warning'>BEST PRICE: <i className='bi bi-currency-rupee '></i>195.00</h5>
                    <div className='modernButtons d-flex gap-2 flex-wrap justify-content-center'>
                        <button className='learnMoreDiscount bg-white text-black'>LEARN MORE</button>
                        <button className='learnMoreDiscount mt bg-dark'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
