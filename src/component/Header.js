import React from "react";

class Header extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div>
                <div>
                    <h2>PolibaBurger</h2>
                </div>
                <div>
                    <img src="../logo.svg" alt="" />
                </div>
            </div>  
        );
    }
}

export default Header;