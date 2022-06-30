import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function MenuHeader() {
        return(
            <header className= "container_header">
                <h3 className= "h3">
                    CONSULTA IL NOSTRO MENU
                </h3>
                    <nav>
                        <NavLink to={{
                            pathname:"/menu/panino"
                        }}>
                        PANINI 
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu/pizza",
                            state: {active:"pizze "}
                        }}>
                        PIZZE
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu/bibite"
                        }}>
                        BIBITE 
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu/dessert"
                        }}>
                        DESSERT
                        </NavLink>
                    </nav>
            </header>
        );

}

