import React, { useState } from 'react'
import './Men.css'
import Catagory2 from '../Components/Catagory2';
const buttons = ["ALL", "SHIRT", "T-SHIRT", "PANT", "SLEEVELESS", "OTHERS"];

export default function Men() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const handleReset = () => {
        setSelectedCategory("ALL");
    };

    return (
        <>
            <div className='bg-dark text-white mensHeader'>
                <h6>MEN'S COLLECTION</h6>
                <h4 className='text-end'><b> UP TO 50% OFF <br /> TRENDY MEN'S WEAR</b></h4>
                <button className='learnMoremodern'>EXPLORE NOW</button>
            </div>
            <div className='container-fluid mens-list 100vw'>
                <div className=' col-xl-2  my-3'>
                    <h6>MEN'S CATEGORY</h6>
                    <div className='buttons-menu gap-2 my-3'>
                        {buttons.map((cat) => (
                            <button key={cat} className={`ctegory-btn btn btn-outline-warning catBn ${selectedCategory === cat ? "active" : ""}`}
                                onClick={() => setSelectedCategory(cat)}>
                                {cat}
                            </button>
                        ))}

                    </div>
                    <h6>PRICE RANGE</h6>
                    <input type='range' name="" id="" />
                    <h6>COLORS</h6>
                    <p>All Colors</p>
                </div>
                <div className=' col-xl-10   '>

                    <Catagory2 category={selectedCategory} onReset={handleReset} />
                </div>
            </div>
        </>
    )
}
