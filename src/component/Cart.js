import React, { useState } from "react";
import { Button } from "@mui/material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

function Cart(props){
    const [products, setProducts] = useState([])

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
