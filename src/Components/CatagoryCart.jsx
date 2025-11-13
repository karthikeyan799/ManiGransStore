import React from 'react'
import './Catagory.css'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, fetchCart } from '../Slices/ManiSlice';
import { useNavigate } from 'react-router-dom';
import { products } from './Catagory2';
import Product from '../NavList/Product';
export default function CatagoryCart({ product }) {

  const dispatch = useDispatch();
  const category = product.category;
  const image = product.image;
  const price = product.price;
  const name = product.name;
  const description = product.description;
  const id = product.id;
  const user = useSelector(state => state.mani.user);
  const productList=product;
  const handletoAdd = () => {
    if (user) {
      dispatch(addtoCart({
        product
        // id, image, category, name, description, price
      }));
    } else {
      alert("Please Login....");
    }
  }

  const navigate = useNavigate();
  const handleParams = (id) => {
    if (user) {
      navigate(`/product/${id}`)
    } else {
      alert("Please Login....");
    }
  }
  //  const filteredProducts =
  //     id === id ? product
  //       : products.filter((p) => p.category === category);
  return (
    <>

      <div className="product-card my-4 border" key={product.id}
        onClick={(e) => handleParams(id)}
      >
        {product.bestPrice && <div className="best-price">BEST PRICE</div>}
        <img src={product.image} alt={product.name} className="product-img" />
        <p className="category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">₹{product.price}</p>
        <button className='btn btn-success' onClick={(e) =>
          handletoAdd(e)
          // dispatch(addtoCart({ id, image, category, name, description, price }))
        }>Add to cart</button>
        <button onClick={(e) => handleParams(id)}>product</button>
        {/* <Product carts={productList}/> */}

      </div>
    </>
  )
}
//  export  const pro=product;