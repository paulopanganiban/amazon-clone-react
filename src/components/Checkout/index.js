import React from 'react'
import Subtotal from '../Subtotal/'
import './Checkout.css'
const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://winwithmidas.com/wp-content/uploads/2017/12/banner-marketing.jpg" alt="" className="checkout_ad"/>
                <div className="">
                    <h2 className="checkout_title">Your shopping cart</h2>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
