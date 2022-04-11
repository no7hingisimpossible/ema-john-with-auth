import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    
    
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    const navigate = useNavigate()
    const handleCheckOut = ()=>{
        navigate('/shipment')
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                <div>
                {
                    cart.map(product => <ReviewItem 
                        key={product.id} 
                        product={product}
                        handleRemoveProduct = {handleRemoveProduct}
                        ></ReviewItem> )
                }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleCheckOut}>Proceed to check out</button>
                </Cart>
            </div>

            
        </div>
    );
};

export default Orders;