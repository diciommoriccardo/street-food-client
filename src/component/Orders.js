import React from "react";
import RecipeReviewCard from "./Componenti";
import ListOrdini from "./ListOrdini";

class Orders extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return ( <div>
            <h2> Orders</h2>
            <ListOrdini/>
       </div> ) ;
    }
}

export default Orders;