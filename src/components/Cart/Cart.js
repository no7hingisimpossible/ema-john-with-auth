import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    
    let total = 0; 
    let shipping = 0;
    let tax = 0;
    let grand = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
        tax = (total * 0.10).toFixed()
        grand = total + shipping + parseFloat(tax)
        
    }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: ${grand}</h4>
            {props.children}
        </div>
    );
};

export default Cart;