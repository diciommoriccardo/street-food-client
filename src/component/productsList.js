import React from "react";
import Product from './Products.js'
import productsServices from "../helpers/Products.js";

class ProductsList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products:[], 
            type: null
        }
        this.getAllProducts = this.getAllProducts.bind(this);
        this.getForCategory = this.getForCategory.bind(this);
    }

    componentDidMount(){
        this.state.type === null ? this.getAllProducts() : this.getForCategory()
    }

    getAllProducts(){
        productsServices.getAll()
        .then(data => {console.log(data); return data.map(row => {
            this.setState(this.state.products.push(<Product data={row}/>))
        })})
        .catch(err => console.log(err))
    }

    getForCategory(category){
        productsServices.getAllForCategory(category).then(data => data.map(row => {
            this.setState(this.state.products.push(<Product data={row}/>))
        }))
    }

    render(){
        return(
            this.state.products.length > 0 ? (
                <div>
                    {this.state.products}
                </div>
            ) : <p>Nessun prodotto trovato</p>
        )
    }
}

export default ProductsList;