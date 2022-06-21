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
                            pathname:"/menu",
                            state:{active:"panini"}
                        }}>
                        Panini
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu",
                            state:{active:"pizze"}
                        }}>
                        Pizze
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu",
                            state:{active:"bibite"}
                        }}>
                        Bibite
                        </NavLink>
                        <NavLink to={{
                            pathname:"/menu",
                            state:{active:"dessert"}
                        }}>
                        dessert
                        </NavLink>
                    </nav>
            </header>
        );

}

