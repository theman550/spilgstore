import React from 'react'
import ProductCard from './ProductCard'
//import {useState} from 'react'

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleFilters: [],
            upperPrice: 999999,
            lowerPrice: 0,
            products: [],
            filteredProducts: [],
            page: 0
        };
    }

    getProducts() {
        console.log("Fetchar från: " + this.props.backendURL);
        fetch(this.props.backendURL + "/products/")
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data.data, page: data.meta.page })
            })
    };


    componentDidMount() {
        this.getProducts();
    };

    filterProducts(product) {
        if(this.state.titleFilters.length === 0 &&
            this.state.upperPrice > 999999 && 
            this.state.lowerPrice === 0)
            return true
        else
            return !this.state.titleFilters.includes(product.name) &&
            this.state.upperPrice >= product.price &&
            this.state.lowerPrice <= product.price
    }



    render() {
        return this.state.products.length > 0 ? (
            <div className="row">
                {this.state.products.filter(e => this.filterProducts(e)).map((product) =>
                    <div className="col-md-3" key={product.product_id}>
                        <ProductCard prod={product} />
                    </div>
                    )}
            </div>)
            :
            <p>"nullProd"</p>
    }
}





export default ProductList