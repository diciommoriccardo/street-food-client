import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CartServices from "../helpers/Cart";
import CartProducts from './CartProducts';

function Cart(props){
    const [products, setProducts] = useState([])

    const getCart = () => {
            CartServices.getAllLocal()
            .then(data => {
                setProducts(previous => [...previous, data.map(prod => {
                    let row = JSON.parse(JSON.stringify(prod))
                    return <CartProducts 
                        img={row.image}
                        displayName={row.displayName}
                        description={row.description}
                    /> 
                }
                )])
            })
    }

    useEffect(() => {
        getCart()
    }, [])

    return (
        products.length > 0 ? (
            <div>
                <div>
                    <h1>Carrello</h1>
                </div>
                <div>
                    {products}
                </div>
                <div>
                    <Button color="success" startIcon={<LocalAtmIcon/>}>Procedi al pagamento</Button>
                </div>
            </div>
            ) : <p>Nessun Prodotto nel carrello</p>
    )
}

export default Cart;
