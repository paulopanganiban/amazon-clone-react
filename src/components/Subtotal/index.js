import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from '../../StateProvider'
import { getBasketTotal } from '../../reducer'
import { useHistory } from 'react-router-dom'

const Subtotal = () => {
    const history = useHistory()
    const [{basket}, dispatch] = useStateValue()
    console.log(getBasketTotal(basket))
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" name="" id=""/>This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} // hw
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button onClick={e => history.push('/payment')} className="btn btn-warning">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
