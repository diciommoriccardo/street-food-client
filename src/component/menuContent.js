import React from "react";
import CartContext from "../contexts/CartContext";
import ButtonPopup from "./ButtonPopup";
import MenuHeader from "./menuHeader";
import ProductsList from "./productsList";

function MenuContent(props){
    const updateCart = props.updateCart

    return(
        <div>
            <MenuHeader />
            <ProductsList />
            <ButtonPopup>AggiuntaProdotto</ButtonPopup>
        </div>

    )
}

export default MenuContent;