import React, { useState } from 'react'
import CatagoryCart from './CatagoryCart';
import './Catagory.css'
// import img1 from '../src/assets/Mani shop/swarovski1.png'
import img1 from '../assets/Mani shop/swarovski1.png'
import img2 from '../assets/Mani shop/kurta.png'
import img3 from "../assets/Mani shop/gownkurta.png"
import img4 from "../assets/Mani shop/pinkmaterial1.png"
import img5 from "../assets/Mani shop/combo1.png"
const products = [
  {
    id: 1,
    name: "SWAROVSKI SAREE",
    category: "SILK SAREE",
    description: "Elevate your look with our elegant Silk Saree – perfect for any special occasion.",
    price: 1790,
    image: img1,
    bestPrice: true,
  },
  {
    id: 2,
    name: "KURTA & CONTRAST PATIALA–STYLE PANTS",
    category: "KIDS + MENS",
    description: "Pale orange pure silk nawabi suit features intricate jacquard design full-sleeve.",
    price: 3059,
    image: img2,
    bestPrice: false,
  },
  {
    id: 3,
    name: "GOWN + KURTHA",
    category: "KIDS + MENS",
    description: "Green tropical floral printed & embroidered ala-neck 3/4th sleeve gown.",
    price: 3420,
    image: img3,
    bestPrice: false,
  },
  {
    id: 4,
    name: "PINK MATERIAL CHURIDAR CATALOG SET",
    category: "CHUDIDHAR",
    description: "Pink material churidar catalog set, embroidered georgette top.",
    price: 999,
    image: img4,
    bestPrice: true,
  },
  {
    id: 5,
    name: "IKKAT DESIGN SAREE",
    category: "SILK SAREE",
    description: "Multi-colour Ikkat Tussar saree with contrast border and striped pallu — vibrant and elegant.",
    price: 2665,
    image: img5,
    bestPrice: false,
  },
];

export default function Catagory2({ category ,onReset }) {
  const [prod, setProd] = useState("ALL")
   const handleReset = () => {
    setProd("ALL");
  };
  // const filteredProducts =
  //   category === "ALL"
  //     ? products.filter((p)=>p.category!==category)
  //     : products.filter((p) => p.category === category);
 
  const filteredProducts =
    category === prod ? products
      : products.filter((p) => p.category === category);
  return (
    <div className="product-list ">

      {filteredProducts.length !== 0 ? filteredProducts.map((item) => (
        <CatagoryCart key={item.id} product={item} />

      )) : (<div> <p>No Products match your filters</p>
        <button onClick={onReset}>Reset Filters</button>
      </div>)}
     
    </div>
  )

}
