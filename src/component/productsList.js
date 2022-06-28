import React, { useEffect, useState } from "react";
import Product from './Products.js'
import productsServices from "../helpers/Products.js";
import { useParams, useLocation } from "react-router-dom";

export default function ProductsList(){
    let [products, setProducts] = useState([]);
    let [active, setActive] = useState(null);
    let [offset, setOffset] = useState(0);
    const limit = 10;
    const params = useParams();
    const location = useLocation();

    const getAllProducts = () => {
        productsServices.getAll(offset, limit)
        .then(data => {
            setOffset(offset + data.length)
            setProducts(current => [...current, data.map(row => {
                return <Product 
                    displayName={row.displayName} 
                    description={row.description} 
                    price={row.price} 
                />
            })])
        })
        .catch(err => console.log(err))
    }

    const getForCategory = (category) => {
        productsServices.getAllForCategory(category)
        .then(data => {
            setProducts(current => [...current, data.map(row => {
                return <Product 
                    displayName={row.displayName} 
                    description={row.description} 
                    price={row.price}
                /> 
            })])
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log("change active")
        setProducts([]);
        active === null ? getAllProducts() : getForCategory(active)
    }, [active])

    useEffect(() => {
        console.log("change location")
        setActive(params.category)
    }, [location])

    

    return (
        products.length > 0 ? (
            <div>
                {products}
            </div>
        ) : <p>Nessun prodotto trovato</p>
    )
}