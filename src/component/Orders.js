import React from "react";
import RecipeReviewCard from "./Componenti";

class Orders extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return ( <div>
            <h2> Orders</h2>
            <RecipeReviewCard></RecipeReviewCard>
       </div> ) ;
    }
}

export default Orders;