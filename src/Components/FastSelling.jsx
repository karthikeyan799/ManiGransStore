import React from 'react'
import '../App.css';
export default function FastSelling() {
    return (
        <div className='container text-center'>
            <div className='py-5'>
                <h6 className='text-warning my-4'>FAST SELLING</h6>
                <h1 className='my-3'>CHOOSING IN OUR STYLE</h1>
                <hr className='my-4' />
            </div>
            <div className='fastCart '>
                <div className='col-xl-2 col cart cart1'>
                    <img className='my-4' src="../src/assets/Mani shop/kanchipuram.png" alt="" />
                    <h6>SILK SAREES</h6>
                    <h6><b> KANCHIPURAM SILK SAREE</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>5,900</h5>
                </div>
                <div className='col-xl-2 col cart cart1'>
                    <img className='my-4' src="../src/assets/Mani shop/froks1.png" alt="" />
                    <h6>GIRLS WEAR</h6>
                    <h6><b> GOWNS & FROKS</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>1,200</h5>
                </div>
                <div className='col-xl-2 col cart cart1'>
                    <img className='my-4' src="../src/assets/Mani shop/kuta1.png" alt="" />
                    <h6>MENS WEAR</h6>
                    <h6><b> KURTHA</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>2,400</h5>
                </div>
                <div className='col-xl-2 col cart cart1'>
                    <img className='my-4' src="../src/assets/Mani shop/ethinic1.png" alt="" />
                    <h6>BOYS WEAR</h6>
                    <h6><b> ETHNIC WEAR</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>410</h5>
                </div>
                <div className='col-xl-2 col cart cart1'>
                    <img className='my-4' src="../src/assets/Mani shop/anarkali1.png" alt="" />
                    <h6>READYMADES</h6>
                    <h6><b> ANARKALI</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>1,800</h5>
                </div>
                <div className='col-xl-2 col cart cart2'>
                    <img className='my-4' src="../src/assets/Mani shop/blouses1.png" alt="" />
                    <h6>BLOUSES</h6>
                    <h6 className='px-2'><b> HEADPHONES CABLE BTA</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>2.5</h5>
                </div>
                <div className='col-xl-2 col cart cart3'>
                    <img className='my-4' src="../src/assets/Mani shop/andra1.png" alt="" />
                    <h6>COTTON & FANCY SAREE</h6>
                    <h6><b> ANDHRA COTTON</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>300</h5>
                </div>
                <div className='col-xl-2 col cart cart3'>
                    <img className='my-4' src="../src/assets/Mani shop/combo1.png" alt="" />
                    <h6>DESIGNER SAREES</h6>
                    <h6><b> COMBO SAREES</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>4,000</h5>
                </div>
                <div className='col-xl-2 col cart cart3'>
                    <img className='my-4' src="../src/assets/Mani shop/butter1.png" alt="" />
                    <h6>FANCY SAREES</h6>
                    <h6><b> BUTTER SILK SAREES</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>3,000</h5>
                </div>
                <div className='col-xl-2 col cart cart3'>
                    <img className='my-4' src="../src/assets/Mani shop/banaras1.png" alt="" />
                    <h6>SEMI BANARAS</h6>
                    <h6><b> SEMI BANARAS CHIFFON</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>700</h5>
                </div>
                <div className='col-xl-2 col cart cart3'>
                    <img className='my-4' src="../src/assets/Mani shop/jacquard1.png" alt="" />
                    <h6>SAMUDRIKA PATTU</h6>
                    <h6><b> JACQUARD SILK SAREE</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>95,000</h5>
                </div>
                <div className='col-xl-2 col cart'>
                    <img className='my-4' src="../src/assets/Mani shop/parampara1.png" alt="" />
                    <h6>PARAMPARA PATTU</h6>
                    <h6><b> GREEN EMBOSSED SILKSAREE</b></h6>
                    <h5><i className='bi bi-currency-rupee'></i>18,625</h5>
                </div>
            </div>
            <span className='bottomLine'></span>
            <button className='learnMore  my-5 px-5 py-2' style={{ backgroundColor: "yellowgreen" }}>VIEW ALL FAST SELLING</button>
        </div>
    )
}
