import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data =>setProducts(data))
    }, []);

    return (
        <section className='shop-container py-5'>
            <Container>
                <Row>
                    <Col md={8} lg={9}>
                        <div className="product-container">
                            {
                                products.map(product => <Products key={product.id} product={product} />)
                            }
                        </div>
                    </Col>
                    <Col md={4} lg={3}>
                        <Cart cart={cart} setCart={setCart} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Shop;