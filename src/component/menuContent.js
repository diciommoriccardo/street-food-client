import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

class menuHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <header>
                <h3>
                    Consulta il nostro menù
                </h3>
                    <nav>
                        <a href="">Panini</a>
                        <a href="">Pizze</a>
                        <a href="">Bibite</a>
                        <a href="">Dessert</a>
                    </nav>
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
            <menuHeader />
        )
    }
}

export default menuContent;