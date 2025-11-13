import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtoCart, clearCart, decreaseCart, getTotal, removeCart } from '../Slices/ManiSlice';
import { products } from '../Components/Catagory2';
export default function Cart() {
  const cartItems = useSelector(state => state.mani.cartItems);
  const cart = useSelector(state => state.mani);
  const user = useSelector(state => state.mani.user);

  // console.log(cartItems.name)

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  useEffect(() => {
    dispatch(getTotal())
  }, [cartItems, dispatch])
  const decriment = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  }
  const increament = (cartItem) => {
      dispatch(addtoCart(cartItem));
  }
  const removeCart1 = (cartItem) => {
    dispatch(removeCart(cartItem));
  }

  return (
    <div className='container-fluid text-cnter p-5 '>

      {cartItems.length > 0 ? (

        <div className='container-fluid d-flex justify-content-around flex-md-row flex-column align-items-start'>
          <div className='col-md-7 col-sm-12 d-flex justify-content-between flex-column'>
            {cartItems.map((item) => {
              return (
                // <div className='col-7 d-flex justify-content-between align-items-start flex-column'>
                <div className='bg-white border p-2 mb-2'>
                  <div className='  d-flex flex-column flex-md-row align-items-center  bg-white' key={item.id}>
                    <img src={item.image} className='col-12 col-md-2' alt="cartimage" />
                    <div className='col-md-10 col-12'>
                      <h5 className='py-2 fw-bolder'>{item.name}</h5>
                      <h5 className='fw-bolder'>price: ₹{item.price}</h5>
                      <p className='w-100'>{item.description}</p>
                      <div className='d-flex align-items-center justify-content-between'>

                        <div className='my2 fw-bold bottom-0'>
                          <button className=' border rounded-pill my-2 px-3 py-2 px-2 py-1  btn btn-secondary text-center me-md-3 m-0'
                            onClick={() => decriment(item)}
                            style={{ cursor: user ? "pointer" : "not-allowed" }}
                          // disabled={item.cartQuantity === 1}
                          >-</button>
                          {item.cartQuantity}
                          <button className=' border rounded-pill my-2 px-3 py-2 btn btn-secondary text-center ms-md-3 m-0'
                            onClick={() => increament(item)}
                            style={{ cursor: user ? "pointer" : "not-allowed" }}>+</button>
                          {/* <button className='btn btn-warning' onClick={() => dispatch(removeCart({ id: item.id }))}>Remove</button> */}

                        </div>

                        <button className='btn btn-warning' onClick={() => removeCart1(item)}
                          disabled={user === 0} style={{ cursor: user ? "pointer" : "not-allowed" }} >Remove</button>

                        {/* <button className='btn btn-warning' onClick={() => dispatch(removeCart({ id: item.id }))}>Remove</button> */}

                      </div>
                    </div>
                  </div>
                  <hr className='w-100' />
                  <p className='text-end pt-2'>Subtotal ( {item.cartQuantity} items)  <b>: {item.cartQuantity * item.price}</b></p>

                </div>
              )
            })}
          </div>
          <div className='col-md-4 col-sm-12 border bg-white p-4'>
            <h5 className='fw-bolder'>PRICE DETAILS</h5> <hr className='w-100' />
            <p className=' float-start fw-bold' style={{ lineHeight: "50px" }}>Total product <br />Subtotal <br />Tax </p>
            <p className=' float-end text-end ' style={{ lineHeight: "50px" }}> <b> {cart.cartTotalQuantity} <br />{cart.cartTotalAmount} <br />{0}</b></p>
            <hr className='w-100' />
            <h5 className=' float-start my-4 fw-semibold text-black'>Total Amount</h5>
            <h5 className=' float-end text-black fw-semibold my-4'>{cart.cartTotalAmount}</h5>
            <button className='btn btn-warning py-2 fw-bolder w-100'
              // disabled={(user === 0 & cart.cartTotalAmount === 0)}
              style={{ cursor: user ? "pointer" : "not-allowed" }}
            > PLACE ORDER</button>
            <button className='btn ' onClick={(item) => dispatch(clearCart(item))}>Clear All</button>
          </div>
          {/* </div> */}
        </div>) : (
        <div className='d-flex flex-column align-items-center'>
          <h2>Your cart is empty</h2>
          <p>Add items to it now.</p>
          <button className='btn btn-primary '>
            <Link to={"/"} className='text-white fw-bold'>Shop now</Link>
          </button>
        </div>)}
    </div>
  )
}
