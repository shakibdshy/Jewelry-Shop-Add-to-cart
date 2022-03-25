import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';

const CartItem = ({item, handleDelete}) => {
    const { img, name, price, quantity } = item;
    return (
        <li className="card-item">
            <img src={img} alt="Product"/>
            <div className="card-item-details">
                <h4>{name}</h4>
                <Button onClick={handleDelete} variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
            </div>
        </li>
    );
};

export default CartItem;