import { SERVER_REST } from "../config/config";
import Cookies from "universal-cookie";

const URL = `http://${SERVER_REST.HOST}:${SERVER_REST.PORT}/api/v1/products/`;
const cookie = new Cookies()
const accessToken = cookie.get('accessToken');
const HEADERS = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
}


export default {
    getAll: (offset, limit) => {
        return new Promise((resolve, reject) => {
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
            fetch(`${URL}`, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify(product),
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}
