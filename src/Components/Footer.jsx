import React from 'react'
import '../App.css';
export default function Footer() {
    return (
        <div className='bg-dark footer container-fluid'>
            <div className='d-flex text-white copy py-5'>
                <div className='col-x-3 footerCopy col sm-12 welcome p-2'>
                    <p>Welcome to Mani textiles, a trusted name in textile and fashion based in
                        Redhills and Gummidipoondi, Chennai.</p>
                    <div className='welcomeDiv gap-2'>
                        <i className='fa fa-phone text-warning '></i>
                        <p className=''>CONTACT US :9600184966 </p>
                    </div>
                    <div className='welcomeDiv gap-1' >
                        <i className='fa fa-envelope text-warning '></i>
                        <p className=''>EMAIL: MANITEXTILESTHEGRANDSTORE@GMAIL.COM <br /></p>

                    </div>
                    <div className='welcomeDiv gap-2'>
                        <i className='fa fa-map-marker text-warning'></i>
                        <p className=''> ADDRESS:NO.176/1,G.N.T ROAD,<br />
                            VALLIMAYIL MARKET CITY, REDHILLS,<br />
                            CHENNAI - 52(OPP TO REDHILLS POLICE STATION, NEAR CSI CHURCH)</p>
                    </div>

                </div>
                <div className='quickAmoreLinks col-x-3 footerCopy col p-2'>


                    <div className='col-xl-5 col-sm6 bg-whit'>
                        <h6><b>Quick Links</b></h6>
                        <ul className='nav quick'>
                            <li className='tag'><a href="">Home</a></li>
                            <li className='tag'><a href="">Register</a></li>
                            <li className='tag'><a href="">Login</a></li>
                            <li className='tag'><a href="">Cart</a></li>
                            <li className='tag'><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className='col-xl-5 col-sm6 '>
                        <h6> <b>More Links</b></h6>
                        <ul className='nav quick'>
                            <li className='tag'><a href="">Women</a></li>
                            <li className='tag'><a href="">Track Oredr</a></li>
                            <li className='tag'><a href="">Product Page</a></li>
                            <li className='tag'><a href="">Buy Now</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-x-3 footerCopy col posts p-2'>
                    <h6>Higlishted Posts</h6>
                    <h5>MANI TEXTILES</h5>
                    <p>TRENDY DESIGNS BLENDING TRADITION WITH MODERN STYLE</p>
                    <h5>MANI TEXTILES</h5>
                    <p>QUALITY-ASSURED PRODUCTS WITH DOORSTEP DELIVERY ACROSS INDIA</p>
                    <h5>MANI TEXTILES</h5>
                    <p>BREATHABLE MULMUL COTTON OUTFITS, PERFECT FOR EVERYDAY COMFORT</p>
                </div>
                <div className='col-x-3 footerCopy col p-2'>
                    <h6>Popular tags</h6>
                    <ul className='nav gap-3 navTags'>
                        <li className="tags"><a href="">Silk Sarees</a></li>
                        <li className="tags"><a href="">Silk Dhoties</a></li>
                        <li className="tags"><a href="">Kids</a></li>
                        <li className="tags"><a href="">Pure Silk</a></li>
                        <li className="tags"><a href="">Kurtha</a></li>
                        <li className="tags"><a href="">Ethnic</a></li>
                        <li className="tags"><a href="">Scurt</a></li>
                        <li className="tags"><a href="">Frocks</a></li>
                        <li className="tags"><a href="">Night Wears</a></li>
                        <li className="tags"><a href="">Art Silk</a></li>
                        <li className="tags"><a href="">Banaras</a></li>
                        <li className="tags"><a href="">Designer saree</a></li>
                    </ul>
                </div>
            </div><hr />
            <div className='containe copy py-3'>
                <div className='col reserve'>
                    <p className=''>&copy; 2025 All rights reserved. Development by <span className='span'>Mani-Textile</span></p>

                </div>
                <div className='col'>
                    <ul className='nav icons'>
                        <li><i className='fa fa-facebook-f'></i></li>
                        <li><i className='fa fa-twitter'></i></li>
                        <li><i className='fa fa-linkedin'></i></li>
                        <li><i className='fa fa-google'></i></li>
                        <li><i className='fa fa-pinterest-p'></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
