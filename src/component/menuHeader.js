import React from "react";

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
                        <a href="/">Panini</a>
                        <a href="/">Pizze</a>
                        <a href="/">Bibite</a>
                        <a href="/">Dessert</a>
                    </nav>
            </header>
        )
    }
}

export default menuHeader;