import React from 'react'
import './Product.css'
function Product( {id,title,image,price,rating}) {
  return (
    <div className='product'>
        <div className='product_info'>
            <p>proudct</p>
            <p className='product_price'>
                <small>price</small>
                <strong>10,000</strong>
                <small>CAD</small>
            </p>

            <div className='product_rating'>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
            </div>
        </div>

        <img src='https://en.pimg.jp/024/292/158/1/24292158.jpg' alt=''/>
        <button>Add to Cart</button>
    </div>
  )
}

export default Product