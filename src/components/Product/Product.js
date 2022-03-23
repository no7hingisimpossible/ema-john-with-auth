import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    const {handleClick} = props; 
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
                <div className='m-rating'>
                    <p><small>manufacturer: {seller}</small></p>
                    <p><small>rating: {ratings}</small></p>
                </div>
            </div>
            <button onClick={()=>handleClick(name)} className='btn'>Add to cart <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Product;