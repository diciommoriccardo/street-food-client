import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import MenuHeader from "./menuHeader";
import FoodSection from "./foodSection";

class MenuContent extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <MenuHeader/>
                <FoodSection />
            </div>

        )
    }
}

export default MenuContent;