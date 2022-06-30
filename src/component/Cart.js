import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CartServices from "../helpers/Cart";
import OrdersServices from '../helpers/Orders';
import CartProducts from './CartProducts';
import UserContext from '../contexts/UserContext';

function Cart(props){
    const [products, setProducts] = useState([])
    const [productsInfo, setProductInfo] = useState([])
    const [total, setTotal] = useState(0)

    const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);

    const getCart = () => {
            CartServices.getAllLocal()
            .then(data => {
                setProducts(previous => [...previous, data.map(prod => {
                    let row = JSON.parse(JSON.stringify(prod))
                    setProductInfo(productsInfo => [...productsInfo, {
                        _id: row._id,
                        imgUrl: row.image,
                        displayName: row.displayName,
                        description: row.description,
                        price: row.price
                    }])
                    setTotal(total + row.price)
                    return <CartProducts 
                        img={row.image}
                        displayName={row.displayName}
                        description={row.description}
                        price={row.price}
                    /> 
                }
                )])
            })
    }

    console.log(productsInfo)

    const handleSubmit = () => {
        OrdersServices.add({
            description: `Order - ${Date()} - ${user.displayName}`,
            date: Date(),
            price: total,
            items: productsInfo,
            status: `Pagato`
        })
        .then(data => {
            alert("Grazie per aver odinato, ecco il suo ordine: " + data.description)
            localStorage.clear();
        })
        .catch(err => console.log(err))
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
                    <Button color="success" startIcon={<LocalAtmIcon/>} onClick={handleSubmit}>Procedi al pagamento</Button>
                </div>
            </div>
            ) : <p>Nessun Prodotto nel carrello</p>
    )
}

export default Cart;
