import React from "react";

class FoodSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active: ''
        }
    }

    render(){
        return(
            <div>
                <h3>Menu</h3>
            </div>
        )
    }
}

export default FoodSection