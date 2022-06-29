import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import UserContext from "../contexts/UserContext";
import ButtonPopup from "./ButtonPopup";
import MenuHeader from "./menuHeader";
import ProductsList from "./productsList";

function MenuContent(props){
    const { user, setUSert, loggedIn, setLoggedIn } = useContext(UserContext);    

    return(
        <div>
            <MenuHeader />
            <ProductsList />
            {user.type === 'admin' ? <ButtonPopup /> : <></>}
        </div>

    )
}

export default MenuContent;