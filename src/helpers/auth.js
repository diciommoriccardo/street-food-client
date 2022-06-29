import { PROXY } from "../config/config.js"
import Cookies from "universal-cookie";

const cookies = new Cookies();
const URL = `http://${PROXY.HOST}:${PROXY.PORT}`;
const HEADERS = {'Content-Type': 'application/json'};

export default{
    login: async (email, password) => {
        return new Promise((resolve, reject) => {
            console.log(email)
            console.log(password)
            fetch(`${URL}/login`, {
                method: 'POST',
                headers: HEADERS,
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                }),
            }).then(response => response.json())
            .then(data => {
                cookies.set('accessToken', data.accessToken)
                return resolve(data)
            })
            .catch(err => reject(err))
        })
    },

    signup: (user) => {
        return new Promise((resolve, reject) => {
            fetch(`${URL}/signup`, {
                method: 'POST',
                headers: HEADERS,
                credentials: "include",
                body: JSON.stringify(user),
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    logout: () => {
        return new Promise((resolve, reject) => {
            fetch(`${URL}/logout`,{
                method: 'POST',
                headers: HEADERS
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}