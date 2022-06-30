import React from 'react';
import RecipeReviewCard from './Componenti';
import Orders from '../helpers/Orders.js';
import "../styles/ordersList.css";


class ListOrdini extends React.Component {
    constructor(props) {
        super(props);
        this.state = {RecipeReviewCard: [], next: null}
        this.handleGet = this.handleGet.bind(this);
    }

    componentDidMount() {
        this.handleGet();
    }

    handleGet() {
        Orders.getAll(this.state.next)
            .then(data => {
                this.setState({
                    RecipeReviewCard: [...this.state.RecipeReviewCard, data.map(ordine =>{
                        console.log(ordine)
                        return <RecipeReviewCard 
                                    _id={ordine._id}
                                    data={ordine.date} 
                                    price={ordine.price} 
                                    description={ordine.description}
                                    status={ordine.status}
                                />
                    })],
                        
                    next: data[1]
                })
            })
    }

    render() {
        return (
            this.state.RecipeReviewCard.length > 0 ? (
                <>
                    <div className="rowOrdini">
                        {this.state.RecipeReviewCard}
                    </div>
                    <div className="row">
                        <button className="OrdiniButton" onClick={this.handleGet}>Carica altri</button>
                    </div>
                </>
            ) : <>Nessun ordine trovato</>
        )}
}

export default ListOrdini;