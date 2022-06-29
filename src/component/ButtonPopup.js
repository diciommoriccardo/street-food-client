import React from "react";
import MenuHeader from "./menuHeader";
import ProductsList from "./productsList";
import AddProduct from "./AddProduct";
import { useState} from 'react';
import "../styles/buttonpopup.css";

export default function ButtonPopup(props)
{
        const [buttonPopup, setButtonPopup]= useState(false);
        return(
            <div>
            <button className="buttonordine" onClick={()=> setButtonPopup(true)}> Aggiungi un nuvo prodotto</button>
            <AddProduct trigger={buttonPopup} setTrigger={setButtonPopup}></AddProduct>
            </div>

        )
    }

