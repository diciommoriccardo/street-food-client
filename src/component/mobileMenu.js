import React from "react";
import { slide as Burger } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import { Restaurant, Summarize, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import "../styles/mobileMenu.css";
import MenuIcon from '@mui/icons-material/Menu';

class MobileMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newOrders: 0
        }
    }

    render(){
        return(
                // <MenuIcon className="MenuIcon"/>
            <Burger>
                <NavLink to="/menu" ><li><Restaurant /> Menu</li></NavLink>
                <NavLink to="/orders"><li><Badge color="secondary" badgeContent={this.state.newOrders} max={99}><Summarize /></Badge>Ordini</li></NavLink>
                <NavLink to="/cart" ><li><ShoppingCart />Carrello</li></NavLink>
            </Burger>
        )
    }
}

export default MobileMenu;