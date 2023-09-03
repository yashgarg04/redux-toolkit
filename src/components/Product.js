import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const Product = () => {
    const dispatch = useDispatch();

    const [products, getProducts] = useState([]);

    useEffect(() => {
        //api
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => getProducts(result))
    }, []);

    const addToCart = (product) => {
        // dispatch an add action

        dispatch(addItem(product))
    }

    const cards = products.map(product => (
        <div className="col-md-3 mb-3">
            <Card key={product.id} className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR: {product.price}
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <>
            <h1>
                Product Dashboard
            </h1>
            <div className="row">
                {cards}
            </div>
        </>
    )
}

export default Product;