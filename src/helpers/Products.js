import { SERVER_REST } from "../config/config";
import Cookies from "universal-cookie";
import "../styles/cardProducts.css";

const URL = `http://${SERVER_REST.HOST}:${SERVER_REST.PORT}/api/v1/products/`;
const cookie = new Cookies()



export default {
    getAll: (offset, limit) => {
        return new Promise((resolve, reject) => {
            const accessToken = cookie.get('accessToken');
            const HEADERS = {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }

            fetch(`${URL}?offset=${offset}&limit=${limit}`, {
                headers: HEADERS
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    getAllForCategory: (category) => {
        return new Promise((resolve, reject) => {
            const accessToken = cookie.get('accessToken');
            const HEADERS = {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }

            fetch(`${URL}/category/${category}`,{
                headers: HEADERS
            })
            .then(data => data.json())
            .then(json => {console.log(json); return resolve(json)})
            .catch(err => {console.log(err); return reject(err)})
        })
        
    },

    add: (product) => {
        return new Promise((resolve, reject) => {
            const accessToken = cookie.get('accessToken');
            const HEADERS = {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }

            fetch(`${URL}`, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify(product),
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    delete: (_id) => {
        return new Promise((resolve, reject) => {
            const accessToken = cookie.get('accessToken');
            const HEADERS = {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }

            fetch(`${URL}/${_id}`, {
                method: 'DELETE',
                headers: HEADERS
            })
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}
