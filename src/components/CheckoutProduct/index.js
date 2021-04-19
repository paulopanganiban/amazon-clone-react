import React from 'react'
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css'
const CheckoutProduct = ({id, image, title, price, rating}) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_TO_CART',
            // pass the id to know ano dedelete natin
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image"src={image} alt=""/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="checkoutProduct_rating">
                               {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                    
                </div>
                <button onClick={removeFromBasket} className="btn btn-warning">Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
