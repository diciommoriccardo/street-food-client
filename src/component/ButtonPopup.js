import React from "react";
import MenuHeader from "./menuHeader";
import ProductsList from "./productsList";
import AddProduct from "./AddProduct";
import { useState} from 'react';
<<<<<<< HEAD
import '../styles/aggiuntaProdotto.css'
=======
import "../styles/buttonpopup.css";
>>>>>>> 0b3c5053d7c14c3171c689fbe2ed2b7c799f65f8

export default function ButtonPopup(props)
{
        const [buttonPopup, setButtonPopup]= useState(false);
        return(
            <div>
<<<<<<< HEAD
            <button class="button button2" onClick={()=> setButtonPopup(true)}> Aggiungi un prodotto</button>
=======
            <button className="buttonordine" onClick={()=> setButtonPopup(true)}> Aggiungi un nuvo prodotto</button>
>>>>>>> 0b3c5053d7c14c3171c689fbe2ed2b7c799f65f8
            <AddProduct trigger={buttonPopup} setTrigger={setButtonPopup}></AddProduct>
            </div>

        )
    }

