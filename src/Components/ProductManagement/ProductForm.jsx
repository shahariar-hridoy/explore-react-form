import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState('')
    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        if (name.length === 0) {
            setError('Add Product name')
            return;
        }
        else if (price.length === 0) {
            setError('Add product price')
            return;
        }
        else if (price < 0) {
            setError('Price cannot be negative.')
            return;
        }
        else {
            setError('')
        }

        const newProduct = {
            name,
            price,
            quantity
        }
        if (!error) {
            handleAddProduct(newProduct)
        }
    }
    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder='Product Price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" />
            </form>
            <p style={{ color: 'red' }}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;