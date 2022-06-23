import { PROXY } from "../config/config";
import Cookies from "universal-cookie";

const URL = `http://${PROXY.HOST}:${PROXY.PORT}/api/v1/products/`;
const cookie = new Cookies()
const accessToken = cookie.get('accessToken');
console.log(accessToken)
const HEADERS = {
    'Authorization': accessToken,
    'Content-Type': 'application/json',
}


export default {
    getAll: () => {
        return new Promise((resolve, reject) => {
            resolve(test)
        })
        // fetch(`${URL}`)
        // .then(data => data.json())
        // .then(json => json)
        // .catch(err => console.log(err))
    },

    getAllForCategory: (category) => {
        fetch(`${URL}/${category}`)
        .then(data => data.json())
        .then(json => json)
        .catch(err => console.log(err))
    }
}
