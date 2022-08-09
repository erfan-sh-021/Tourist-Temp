import React, { Component } from 'react';
import Product from './Products';
const ProductList = (props) => {
    return (props.products.map(item => (
        <div className="col-12 col-md-6 col-lg-3" key={item.id}>
            <Product data={item} />
        </div>
    ))
    )
}


export default ProductList;

