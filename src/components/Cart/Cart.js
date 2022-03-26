import React from 'react';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem/CartItem';
import './Cart.css';

const Cart = ({cart, removeFormCart, emptyCart, randomItem}) => {
    return (
        <div className="card-sidebar">
            <h3>Cart List</h3>

            <ul>
                {
                    cart.map(item => <CartItem item={item} key={item.id} removeFormCart={removeFormCart} />)
                }
            </ul>
            
            <div className="button-group">
                <Button variant="outline-info" onClick={ () => randomItem(cart)}>Select One</Button>
                <Button variant="outline-danger" onClick={() => emptyCart()}>Empty Cart</Button>
            </div>
        </div>
    );
};

export default Cart;