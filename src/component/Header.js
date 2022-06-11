import React from "react";

class Header extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <header className="dk-header">
                <div>
                    <h2>PolibaBurger</h2>
                </div>
                <div>
                    <img src="../logo.svg" alt="" />
                </div>
            </header>  
        );
    }
}

export default Header;