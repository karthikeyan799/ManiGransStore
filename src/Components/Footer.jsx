import React from 'react'
import '../App.css';
export default function Footer() {
    return (
        <div className='bg-dark pt-5'>
            <div className='d-flex text-white copy'>
                <div className='col-3'>
                    <p>Welcome to Mani textiles, a trusted name in textile and fashion based in Redhills and Gummidipoondi, Chennai.</p>
                    <p><i className='bi bi-telephone text-warning px-2'></i>CONTACT US :9600184966 </p>
                    <p className=''><i className='bi bi-twitter text-warning'></i>EMAIL: MANITEXTILESTHEGRANDSTORE@GMAIL.COM <br /></p>
                    <p><i className='bi bi-location text-warning pl-2'></i>ADDRESS:NO.176/1,G.N.T ROAD,<br />
                        VALLIMAYIL MARKET CITY, REDHILLS,<br />
                        CHENNAI - 52(OPP TO REDHILLS POLICE STATION, NEAR CSI CHURCH)</p>
                </div>
                <div className='col-1 bg-whit'>
                    <h6>Quick Links</h6>
                    <ul className='nav'>
                        <li className='nav-lst'>Home</li>
                        <li className='nav-lst'>Register</li>
                        <li className='nav-lst'>Login</li>
                        <li className='nav-lst'>Cart</li>
                        <li className='nav-lst'>Contact</li>
                    </ul>
                </div>
                <div className='col-1'>
                    <h6>More Links</h6>
                    <ul className='nav'>
                        <li className='nav-lst'>Women</li>
                        <li>Track Oredr</li>
                        <li>Product Page</li>
                        <li>Buy Now</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h6>Higlishted Posts</h6>
                    <h5>MANI TEXTILES</h5>
                    <p>TRENDY DESIGNS BLENDING TRADITION WITH MODERN STYLE</p>
                    <h5>MANI TEXTILES</h5>
                    <p>QUALITY-ASSURED PRODUCTS WITH DOORSTEP DELIVERY ACROSS INDIA</p>
                    <h5>MANI TEXTILES</h5>
                    <p>BREATHABLE MULMUL COTTON OUTFITS, PERFECT FOR EVERYDAY COMFORT</p>
                </div>
                <div className='col-3'>
                    <h6>Popular tags</h6>
                    <ul className='nav gap-2 navTags'>
                        <li className="tags">Silk Sarees</li>
                        <li className="tags">Silk Dhoties</li>
                        <li className="tags">Kids</li>
                        <li className="tags">Pure Silk</li>
                        <li className="tags">Kurtha</li>
                        <li className="tags">Ethnic</li>
                        <li className="tags">Scurt</li>
                        <li className="tags">Frocks</li>
                        <li className="tags">Night Wears</li>
                        <li className="tags">Art Silk</li>
                        <li className="tags">Banaras</li>
                        <li className="tags">Designer saree</li>
                    </ul>
                </div>
            </div><hr />
            <div className='containe copy'>
                <div className='col'>
                    <p className='text-white'>&copy;2025 All rights reserved. Development by <span className='span'>Mani-Textile</span></p>

                </div>
                <div className='col'>
                    <ul className='nav text-white icons'>
                        <li><i className='bi bi-facebook'></i></li>
                        <li><i className='bi bi-twitter'></i></li>
                        <li><i className='bi bi-twitter'></i></li>
                        <li><i className='bi bi-google'></i></li>
                        <li><i className='bi bi-twitter'></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
