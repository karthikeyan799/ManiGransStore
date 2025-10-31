import React from 'react'
import './catagory.css'
export default function CatagoryCart({ product }) {
  return (
    <div className="product-card border">
      {product.bestPrice && <div className="best-price">BEST PRICE</div>}
      <img src={product.image} alt={product.name} className="product-img" />
      <p className="category">{product.category}</p>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc">{product.description}</p>
      <p className="product-price">₹{product.price}</p>
    </div>
  )
}
