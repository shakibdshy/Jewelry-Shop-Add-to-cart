import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { addToDb, deleteShoppingCart, getStoredCart, removeFromDb } from '../../utilities/fakedb';
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

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    const removeFormCart = (id) =>{
        const rest = cart.filter(product => product.id !== id);
        setCart(rest);
        removeFromDb(id);
    }

    const emptyCart = (id) => {
        setCart([]);
        deleteShoppingCart();
    }

    const randomItem = (item) => {
        let random = [];
        const randomProduct = products[Math.floor(Math.random() * item.length)];
        random.push(randomProduct);
        setCart(random);
    }

    return (
        <section className='shop-container py-5'>
            <Container fluid>
                <Row>
                    <Col md={8}>
                        <div className="product-container">
                            {
                                products.map(product => <Products key={product.id}
                                    product={product}
                                    handleAddToCart={handleAddToCart} 
                                    />)
                            }
                        </div>
                    </Col>
                    <Col md={4}>
                        <Cart cart={cart} randomItem={randomItem} removeFormCart={removeFormCart} emptyCart={emptyCart} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Shop;