import React, { Component } from 'react';
import ProductList from '../product/ProductList';
import 'react-alice-carousel/lib/alice-carousel.css';

class HomePage extends Component {

    render() {
        return (
            <div className="container1 ">
                    <div className="row">
                        <ProductList products={this.state.products} />
                    </div>
            </div>

        );
    }
}

export default HomePage;