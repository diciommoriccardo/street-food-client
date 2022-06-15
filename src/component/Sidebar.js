import React from "react";
import {
    BrowserRouter as Router, 
    NavLink } from 'react-router-dom';
import "../styles/sidebar.css";

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
                    <li className="active"><NavLink to="/"> Menu</NavLink></li>
                    <li><NavLink to="/orders">Ordini</NavLink></li>
                    <li><NavLink to="/cart">Carrello</NavLink></li>
                </ul> 
            </div>
                       
        )
    }
}

export default Sidebar;

