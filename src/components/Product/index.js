import React from 'react'
import './Product.css'
import { Button } from 'react-bootstrap';
import { useStateValue } from '../../StateProvider';
const Product = ({ title, image, price, rating, id }) => {
    const [{ basket }, dispatch] = useStateValue()
    // onClick
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            // what to push
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
                title: title,
            },
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price"><small>$</small><strong>{price}</strong></p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
            </div>
            <img src={image} alt="" />

            <Button onClick={addToBasket} variant="warning">Add to Cart</Button>
        </div>
    )
}

export default Product
