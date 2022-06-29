import React from "react";
import MenuHeader from "./menuHeader";
import ProductsList from "./productsList";
import AddProduct from "./AddProduct";
import { useState} from 'react';
import '../styles/aggiuntaProdotto.css'

export default function ButtonPopup(props)
{
        const [buttonPopup, setButtonPopup]= useState(false);
        return(
            <div>
            <button class="button button2" onClick={()=> setButtonPopup(true)}> Aggiungi un prodotto</button>
            <AddProduct trigger={buttonPopup} setTrigger={setButtonPopup}></AddProduct>
            </div>

        )
    }

