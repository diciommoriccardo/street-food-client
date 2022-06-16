import React from "react";
import {
    BrowserRouter as Router, 
    NavLink } from 'react-router-dom';
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
            <div>
               <ul>
                    <li><NavLink to="/"><Restaurant />Menù</NavLink></li>
                    <li><NavLink to="/orders"><Summarize /> Ordini</NavLink></li>
                    <li><NavLink to="/cart"><ShoppingCart />Carrello</NavLink></li>
                </ul> 
            </div>
                       
        )
    }
}

export default Sidebar;

