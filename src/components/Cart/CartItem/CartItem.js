import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';

const CartItem = ({item, removeFormCart}) => {
    const { img, name } = item;
    return (
        <li className="card-item">
            <img src={img} alt="Product"/>
            <div className="card-item-details">
                <h4>{name}</h4>
                <Button onClick={() => removeFormCart(item.id)} variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
            </div>
        </li>
    );
};

export default CartItem;