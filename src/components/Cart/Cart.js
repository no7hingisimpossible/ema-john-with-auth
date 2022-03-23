import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart} = props
    return (
        <div>
            <p className='order-summary'>Order summary</p>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${}</p>
        </div>
    );
};

export default Cart;