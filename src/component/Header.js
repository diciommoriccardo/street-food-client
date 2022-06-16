import React from "react";
import "../styles/header.css";

class Header extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <header className="dk-header">
                <div className="img">
                    <img src="../img/logo_header.png" alt="" />
                </div>
            </header>  
        );
    }
}

export default Header;