import { PROXY, SERVER_REST } from "../config/config";
import Cookies from "universal-cookie";

const URL = `http://${SERVER_REST.HOST}:${SERVER_REST.PORT}/api/v1/products/`;
const cookie = new Cookies()
const accessToken = cookie.get('accessToken');
console.log(accessToken)
const HEADERS = {
    'Authorization': `Bearer ${cookie.get('accessToken')}`,
    'Content-Type': 'application/json',
}


export default {
    getAll: () => {
        return new Promise((resolve, reject) => {
            fetch(URL, {
                headers: HEADERS
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    getAllForCategory: (category) => {
        fetch(`${URL}/${category}`)
        .then(data => data.json())
        .then(json => json)
        .catch(err => console.log(err))
    }
}
