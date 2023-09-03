import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeItem } from '../store/cartSlice';

export default function Cart() {

  const products = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    //dispatch a remove action

    dispatch(removeItem(id));
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
                <Button variant="danger" onClick={() => removeFromCart(product.id)} >Remove Item</Button>
            </Card.Footer>
        </Card>
    </div>
  ))

    return (
        <>
          <div className='row'>
            {cards}
          </div>
        </>
    )
}
