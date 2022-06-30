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
                        <p>PANINI  </p>
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu/pizza",
                            state: {active:"pizze "}
                        }}>
                        <p>PIZZE  </p>
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu/bibite"
                        }}>
                        <p>BIBITE </p> 
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu/dessert"
                        }}>
                        <p>DESSERT</p>
                        </NavLink>
                    </nav>
            </header>
        );

}

