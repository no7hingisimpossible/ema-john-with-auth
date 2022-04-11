import React from 'react';
import './ReveiwItem.css'

const ReviewItem = (props) => {
    const {name, img, price, shipping, quantity} = props.product; 
    const {handleRemoveProduct} = props; 
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-info-container'>
                <div className='review-item-info'>
                <p>{name}</p>
                <p>Price: ${price}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Quantity: {quantity}</p>
                </div>
                <div>
                    <button onClick={()=> handleRemoveProduct(props.product)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;