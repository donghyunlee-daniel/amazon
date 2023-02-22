import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
    <div className='subtotal'>
        
        <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
                Total (0 items) : <strong>0 CAD</strong>
            </p>
                <small className='subtotal_gift'>
                    <input type='checkbox'/> Checkbox
                </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button>Checkout</button>
    </div>
  )
}

export default Subtotal