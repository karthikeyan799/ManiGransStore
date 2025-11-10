import React, { useState } from 'react'
import Catagory2 from '../Components/Catagory2';
const buttons = ["ALL", "FROCK", "T-SHIRT", "SHIRT", "SHORTS", "JEANS", "KURTA", "DRESS"];

export default function Kids() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
   const handleReset = () => {
    setSelectedCategory("ALL");
  };
  return (
    <div>
      <div className='bg-dark text-white mensHeader'>
        <h6>NEW ARRIVALS</h6>
        <h4 className='text-end'><b> KIDS COLLECTION <br /> FRESH AND TRENDY</b></h4>
        <button className='learnMoremodern'>EXPLORE NOW</button>
      </div>
      <div className='container-fluid mens-list'>
        <div className='col-xl-2 my-3'>
          <h6>PRODUCT TYPES</h6>
          <div className='buttons-menu gap-2 my-3'>
            {buttons.map((cat) => (
              <button key={cat} className={`category-bt btn btn-outline-warning catBn ${selectedCategory === cat ? "active" : ""}`}
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
        <div className='col-xl-10'>
          {/* 
          {selectedCategory ? (

            <div className=''>
              <p>No Product match your filters</p>
              <button type='reset'>Reset Filters</button>
            </div>) : ( */}
          {/* {selectedCategory ? } */}
          {/* {selectedCategory.length !== 0 ? */}
            <Catagory2 category={selectedCategory} onReset={handleReset}/>
            {/* : (<div> <p>No Products match your filters</p>
              <button onClick={handleReset}>Reset Filters</button>
            </div>)
          } */}
        </div>
      </div>

    </div>
  )
}
