import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

class menuHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: ''
        }
    }

    render(){
        return(
            <header>
                <h3>
                    Consulta il nostro menù
                </h3>
                <Router>
                    <nav>
                        <a href="">Panini</a>
                        <a href="">Pizze</a>
                        <a href="">Bibite</a>
                        <a href="">Dessert</a>
                    </nav>
                </Router>
            </header>
        )
    }
}

class menuContent extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <menuHeader active='panini'></menuHeader>
        )
    }
}

export default menuContent;