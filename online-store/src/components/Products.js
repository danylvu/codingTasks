import React, { useState } from 'react';
import { Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
    { id: 1, title: 'Product 1', description: 'This is product 1', price: 29.99, colors: ['Red', 'Blue', 'Green'] },
    { id: 2, title: 'Product 2', description: 'This is product 2', price: 39.99, colors: ['Red', 'Blue', 'Green'] },
    { id: 3, title: 'Product 3', description: 'This is product 3', price: 19.99, colors: ['Red', 'Blue', 'Green'] },
    { id: 4, title: 'Product 4', description: 'This is product 4', price: 24.99, colors: ['Red', 'Blue', 'Green'] },
    { id: 5, title: 'Product 5', description: 'This is product 5', price: 49.99, colors: ['Red', 'Blue', 'Green'] },
    { id: 6, title: 'Product 6', description: 'This is product 6', price: 59.99, colors: ['Red', 'Blue', 'Green'] },
    { id: 7, title: 'Product 7', description: 'This is product 7', price: 34.99, colors: ['Red', 'Blue', 'Green'] },
    { id: 8, title: 'Product 8', description: 'This is product 8', price: 44.99, colors: ['Red', 'Blue', 'Green'] },
    { id: 9, title: 'Product 9', description: 'This is product 9', price: 54.99, colors: ['Red', 'Blue', 'Green'] },
    { id: 10, title: 'Product 10', description: 'This is product 10', price: 64.99, colors: ['Red', 'Blue', 'Green'] },
];

function Products({ onBuy }) {
    const [selectedColors, setSelectedColors] = useState({});

    const handleColorSelect = (productId, color) => {
        setSelectedColors({ ...selectedColors, [productId]: color });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={`https://via.placeholder.com/150`} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title={selectedColors[product.id] || 'Select Color'}
                                >
                                    {product.colors.map((color) => (
                                        <Dropdown.Item
                                            key={color}
                                            onClick={() => handleColorSelect(product.id, color)}
                                        >
                                            {color}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                                <Button
                                    variant="primary"
                                    className="mt-3"
                                    onClick={() => onBuy(product.price)}
                                >
                                    Buy
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
