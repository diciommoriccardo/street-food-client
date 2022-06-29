/* eslint-disable no-undef */
import { PROXY } from "../config/config.js"
import Cookies from "universal-cookie";

const cookies = new Cookies();
const URL = `http://${PROXY.HOST}:${PROXY.PORT}`;
const HEADERS = {'Content-Type': 'application/json'};

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    addProduct: async (nome, descrizione,) => {
        return new Promise((resolve, reject) => {
            console.log(nome);
            console.log(descrizione);

            fetch(`${URL}/create`, {
                method: 'POST',
                headers: HEADERS,
                credentials: "include",
                body: JSON.stringify({
                    nome,
                    descrizione,
                    linkImmagine,
                    prezzo,
                    ricetta

                }),
            }).then(response => response.json())
            .catch(err => reject(err))
        })
    }
    }