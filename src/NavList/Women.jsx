import React, { useState } from 'react'
import Catagory2 from '../Components/Catagory2';
const buttons = ["ALL", "COTTON", "SILK SAREE", "KANJIPURAM", "PATTU", "SEMI BANARASI", "SHORT COTTON SAREES"];

export default function Women() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <div>
      <div className='bg-dark text-white mensHeader'>
        <h6>DONT'T MISS</h6>
        <h2 className='text-end'>UP TO 70% BEST SILK SAREES</h2>
        <button className='learnMoremodern'>EXPLORE NOW</button>
      </div>
      <div className='container mens-list'>
        <div className='col-2 my-3'>
          <h6>TYPES OF SAREES</h6>
          <div className='buttons-menu gap-2 my-3'>
            {buttons.map((cat) => (
              <button key={cat} className={`ctegory-btn catBn ${selectedCategory === cat ? "active" : ""}`}
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
        <div className='col-10'>

          <Catagory2 category={selectedCategory} />
        </div>
      </div>
    </div>
  )
}
