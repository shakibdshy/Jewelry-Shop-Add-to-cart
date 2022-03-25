import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import './Products.css';

const Products = ({product, handleAddToCart}) => {
    const { name, img, price } = product;

    return (
        <Card>
            <Card.Img src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)}>
                    Add To Cart <FontAwesomeIcon icon={faBagShopping} />
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Products;