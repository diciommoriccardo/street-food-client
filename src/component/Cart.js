import React from "react";
import { Button } from "@mui/material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';



class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products: []
        }
        this.addProduct=this.addProduct.bind(this)
    }

    componentDidMount(){}
    addProduct(product){
        this.setState(this.state.products.push(product))
    }

    render(){
        return(
            this.state.products.length > 0 ? (
            <div>
                <div>
                    <h1>Carrello</h1>
                </div>
                <div>
                    {this.state.products}
                </div>
                <div>
                    <Button color="success" startIcon={<LocalAtmIcon/>}>Procedi al pagamento</Button>
                </div>
            </div>
            ) : <p>Nessun Prodotto nel carrello</p>
            
        )
    }
}
export default Cart;
