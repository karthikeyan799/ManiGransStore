import React from 'react'

export default function Cart() {
  return (
    <div className='container-fluid text-center py- cart'>
      <h2>Your cart is empty</h2>
      <p>Add items to it now.</p>
      <button className='btn btn-info'>Shop now</button>
    </div>
  )
}
