import React from "react";
import ButtonPopup from "./ButtonPopup";
import MenuHeader from "./menuHeader";
import ProductsList from "./productsList";

class MenuContent extends React.Component{
    constructor(){
        super();


    }

    render() {
        return(
            <div>
                <MenuHeader />
                <ProductsList />
                <ButtonPopup>AggiuntaProdotto</ButtonPopup>
            </div>

        )
    }
}

export default MenuContent;