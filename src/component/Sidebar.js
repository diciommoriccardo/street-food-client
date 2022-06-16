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
                    <li><Restaurant /><NavLink to="/"> Menu</NavLink></li>
                    <li><NavLink to="/orders"><Summarize />Ordini</NavLink></li>
                    <li><NavLink to="/cart"><ShoppingCart />Carrello</NavLink></li>
                </ul> 
            </div>
                       
        )
    }
}

export default Sidebar;

