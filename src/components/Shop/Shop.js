import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    
    useEffect( ()=>{
        const storedCart = getShoppingCart()
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id ===id)
            if(addedProduct){
                const quantity = storedCart[id]; 
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])
    
    

    

    const handleClick = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product=> product.id === selectedProduct.id)
        console.log(exists);
        if(!exists){
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        } 
        else{
            const rest = cart.filter(product=> product.id !== selectedProduct.id)
            console.log(...rest);
            exists.quantity = exists.quantity + 1; 
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
        
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                   products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleClick={handleClick}
                    >

                    </Product>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};


export default Shop;