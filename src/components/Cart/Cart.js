import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.css';

const Cart = ({cart, removeFormCart}) => {
    return (
        <div className="card-sidebar">
            <h3>Cart List</h3>

            <ul>
                {
                    cart.map(item => <CartItem item={item} key={item.id} removeFormCart={removeFormCart} />)
                }
            </ul>

        </div>
    );
};

export default Cart;