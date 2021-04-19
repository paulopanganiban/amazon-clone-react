import React from 'react'
import { useStateValue } from '../../StateProvider';
import Subtotal from '../Subtotal/'
import './Checkout.css'
import CheckoutProduct from '../CheckoutProduct/'
const Checkout = () => {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://winwithmidas.com/wp-content/uploads/2017/12/banner-marketing.jpg" alt="" className="checkout_ad"/>
                <div className="">
                    <h3>{user?.email}</h3>
                    <h2 className="checkout_title">Your shopping cart</h2>
                

                </div>

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    >
                    </CheckoutProduct>
                ))}
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
