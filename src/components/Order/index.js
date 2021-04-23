import React from 'react'
import './Order.css'
import moment from 'moment'
const Order = ({order}) => {
    return (
        <div className="order">
            <h2>Your order</h2>
            <p>{order.data.created}</p>
        </div>
    )
}

export default Order
