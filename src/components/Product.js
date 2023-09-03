import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
    const dispatch = useDispatch();

    const {data: products, status} = useSelector(state => state.products);

    console.log(products);

    // const [products, getProducts] = useState([]);

    useEffect(() => {
        //api
        // fetch('https://fakestoreapi.com/products')
        // .then(data => data.json())
        // .then(result => getProducts(result))


        //dispatch an action for fetchProducts
         dispatch(getProducts());
    }, []);

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'error') {
        return <p>Something went wrong! Try again later...</p>
    }

    const addToCart = (product) => {
        // dispatch an add action

        dispatch(addItem(product))
    }

    const cards = products.map(product => (
        <div key={product.id} className="col-md-3 mb-3">
            <Card className="h-100">
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