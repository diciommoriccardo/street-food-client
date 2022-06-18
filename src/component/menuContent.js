import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import MenuHeader from "./menuHeader";

class MenuContent extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div><MenuHeader></MenuHeader></div>

        )
    }
}

export default MenuContent;