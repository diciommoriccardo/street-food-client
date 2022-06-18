import React from "react";
import {
    BrowserRouter as Router, 
    NavLink } from 'react-router-dom';
import "../styles/sidebar.css";
import { Restaurant, Summarize, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";


class Sidebar extends React.Component{
    constructor(){
        super();
        this.state = {
            newOrders: 0
        }
    }

    render() {
        return( 
            <div className="sidebarContainer">
               <ul className="listaContainer">
                    <NavLink to="/menu" ><li><Restaurant /> Menu</li></NavLink>
                    <NavLink to="/orders"><li><Badge color="secondary" badgeContent={this.state.newOrders} max={99}><Summarize /></Badge>Ordini</li></NavLink>
                    <NavLink to="/cart" ><li><ShoppingCart />Carrello</li></NavLink>
                </ul> 
            </div>
                       
        )
    }
}

export default Sidebar;

