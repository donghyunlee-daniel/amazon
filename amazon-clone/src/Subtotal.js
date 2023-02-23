import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
function Subtotal() {
    const [{basket},dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        
        <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
                Total ({basket.length}) : <strong>0 CAD</strong>
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