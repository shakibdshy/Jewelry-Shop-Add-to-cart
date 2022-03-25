import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.css';

const Cart = ({cart}) => {
    
    return (
        <div className="card-sidebar">
            <h3>Cart List</h3>

            <ul>
                {
                    cart.map(item => <CartItem item={item} />)
                }
            </ul>

        </div>
    );
};

export default Cart;