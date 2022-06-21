import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import ListOrdini from "./ListOrdini";
import MediaCard from "./MenuCard";
import MenuHeader from "./menuHeader";

class MenuContent extends React.Component{
    constructor(){
        super();


    }

    render() {
        return(
            <div>
                <MenuHeader />
            </div>

        )
    }
}

export default MenuContent;