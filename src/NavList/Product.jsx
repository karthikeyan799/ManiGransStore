import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, decreaseCart, fetchCart, removeCart } from '../Slices/ManiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../Components/Catagory2';
// import { pro } from '../Components/CatagoryCart';
export default function Product({ title, image }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.mani.user);
    const findid = useSelector(state => state.mani.cartItems);
    const { productId } = useParams();
    const decriment = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    }
    const increament = (cartItem) => {
        dispatch(addtoCart(cartItem));
    }
    const removeCart1 = (cartItem) => {
        dispatch(removeCart(cartItem));
    }


    // console.log(productId)
    const index = products.find((p) => p.id === parseInt(productId))
    const without = products.filter((p) => p.id !== parseInt(productId))
    console.log(index.name)
    console.log("----------------------------------")
    // console.log(without)
    const handletoAdd = () => {
        if (user) {
            dispatch(addtoCart(index
                // {      products}
                // id, image, category, name, description, price
            ));
        } else {
            alert("Please Login....");
        }
    }
    const handleParams = (id) => {
        // dispatch(fetchCart(e))
        // dispatch(addtoCart({
        //   id, image, category, name, description, price
        // }));
        navigate(`/product/${id}`)
    }
    // const filteredProducts =
    //     category === prod ? products
    //         : products.filter((p) => p.category === category);
    // const filteredProducts = findid.f((p) => p.id === productId);
    // console.log(findid);
    // productId === findid.filter((p) => p.id === id);
    // const filteredProducts = productId === products.findIndex((p) => p.id === productId)
    // const filteredProducts = productId=== findid.filter((p)=>p.id===productId);
    // console.log("product page in " + productId)

    if (!index) return <h2>Product not found</h2>;
    return (
        <div className='container my-5 '>
            <div className=' d-flex flex-md-row flex-column justify-content-betwen my-5 gap-5'>
                <img src={index.image} className='col-12 col-md-5 border shadow rounded-2 p-1 m-1 me-md-5' alt="" />

                <div className='col-md-4 col-12 p-3 border d-flex flex-column gap-2 ustify-content-between ms-md-5 m-1'>
                    <h2>{index.category}</h2>
                    <h1>{index.name}</h1>
                    <h3> ₹{index.price}</h3>
                    <h5>Item no: </h5>
                    <h5>Availability: <span className='text-success'>In Stock</span></h5>
                    <h6>{index.description}</h6>
                    <h5>Colour</h5>
                    <ul className='nav gap-0 w-50 d-flex flex-column flex-md-row'>
                        <li className='nav-item bg-danger-subtle p-3 m-0 rounded-5'></li>
                        <li className='nav-item bg-danger p-3  m-0 rounded-5'></li>
                        <li className='nav-item bg-success p-3  m-0 rounded-5'></li>
                        <li className='nav-item bg-warning p-3  m-0 rounded-5'></li>
                    </ul>
                    {/* <h5>Quantity</h5>
                    <div className='d-flex flex-row border justify-content-cener align-items-center'>
                        <button className=' border rounded-pill my-2 px-3 py-2 btn btn-secondary text-center me-3'
                            onClick={() => decriment(index)}
                            style={{ cursor: user ? "pointer" : "not-allowed" }}
                       
                        >-</button>
                        {index.cartQuantity}
                        <button className=' border rounded-pill my-2 px-3 py-2 btn btn-secondary text-center ms-3'
                            onClick={() => increament(index)}
                            style={{ cursor: user ? "pointer" : "not-allowed" }}>+</button>
                    </div> */}
                    <div>
                        {/* <button className='btn btn-outline-success me-3 px-4 py-2'
                        // onClick={() => dispatch(addtoCart({ title, image }))}
                        >Add to cart</button> */}
                        <button className='btn btn-outline-success' onClick={(e) =>
                            handletoAdd(e)
                            // dispatch(addtoCart({ id, image, category, name, description, price }))
                        }>Add to cart</button>
                        <button className='btn btn-outline-danger ms-3 px-4 py-2'>Buy Now</button>
                    </div>

                </div>
            </div>
            <div>
                <h4>You may also like</h4>
                <div className='d-flex flex-md-row flex-column justify-content-center '>

                    {without.map((w) => {
                        return (
                            <div className='d-flex flex-column bg-priary border px-5 col mx-5 m-md-3 rounded-3 m-3  p-2 py-4' key={w.id} onClick={() => navigate(`/product/${w.id}`)}>
                                <img src={w.image} alt={w.name} className="product-img col-8 h-75 " />
                                <div className='col-12 align-items-center'>
                                    {/* <p className="category">{w.category}</p> */}
                                    <h3 className="product-name">{w.name}</h3>
                                    {/* <p className="product-desc">{w.description}</p> */}
                                    <p className="product-price">₹{w.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
