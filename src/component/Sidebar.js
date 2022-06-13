import React from "react";
import {
    BrowserRouter as Router, 
    NavLink } from 'react-router-dom';

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
                    <li><NavLink to="/"> Menù</NavLink></li>
                    <li><NavLink to="/orders">Ordini</NavLink></li>
                    <li><NavLink to="/cart">Carrello</NavLink></li>
                </ul> 
            </div>
                       
        )
    }
}

export default Sidebar;

