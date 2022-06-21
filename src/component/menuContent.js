import React from "react";
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
            </div>

        )
    }
}

export default MenuContent;