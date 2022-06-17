import React from "react";
import {
    BrowserRouter as Router, 
    NavLink } from 'react-router-dom';
import "../styles/sidebar.css";
import { Restaurant, Summarize, ShoppingCart } from "@mui/icons-material";


class Sidebar extends React.Component{
    constructor(){
        super();
        this.state = {
            active: ''
        }
    }

    render() {
        return( 
            <div className="sidebarContainer">
               <ul className="listaContainer">
                    <NavLink to="/" ><li><Restaurant /> Menu</li></NavLink>
                    <NavLink to="/orders"><li><Summarize />Ordini</li></NavLink>
                    <NavLink to="/cart" ><li><ShoppingCart />Carrello</li></NavLink>
                </ul> 
            </div>
                       
        )
    }
}

export default Sidebar;

