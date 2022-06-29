import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuHeader() {
        return(
            <header>
                <h3>
                    Consulta il nostro menù
                </h3>
                    <nav>
                        <NavLink to={{
                            pathname:"/menu/panino"
                        }}>
                        Panini
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu/pizza",
                            state: {active:"pizze"}
                        }}>
                        Pizze
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu/bibite"
                        }}>
                        Bibite
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu/dessert"
                        }}>
                        Dessert
                        </NavLink>
                    </nav>
            </header>
        );

}

