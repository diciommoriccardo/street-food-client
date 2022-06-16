import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import menuHeader from "./menuHeader";

class menuContent extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <menuHeader />
        )
    }
}

export default menuContent;