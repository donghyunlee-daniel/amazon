import React from 'react'
import Subtotal from './Subtotal'
import './Cart.css'
function Cart() {
  return (
    <div className='cart'>
        <div className='cart_left'>
            <img className='cart_ad' src='https://www.yellowhead.com/wp-content/uploads/nintendo-switch-display-ad.jpg'/>

            <div>
                <h2 className='cart_title'>
                    Cart
                </h2>
            </div>
        </div>
        <div className='cart_right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Cart