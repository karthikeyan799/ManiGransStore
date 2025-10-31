import React, { useState } from 'react'
import './Catagory.css'
import '../App.css'
import Catagory2 from './Catagory2';
const categories = ["ALL", "SILK SAREE", "KIDS + MENS", "CHUDIDHAR", "KURTHI", "COAT SUITS"];
export default function CatagoryList() {
 const [selectedCategory, setSelectedCategory] = useState("ALL");
    return (
        <div className="app-container">
            <h6 className='text-center text-success'>NEW ARRIVALS</h6>
            <h1 className='text-center'>BROWSE OUR CATEGORIES</h1>
            <hr />

            <div className="category-menu my-5">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`category-btn catBtn ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <Catagory2 category={selectedCategory} />
        </div>
    )
}
