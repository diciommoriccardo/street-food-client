import { PROXY } from "../config/config.js"
import Cookies from "universal-cookie";

const cookies = new Cookies();
const URL = `http://${PROXY.HOST}:${PROXY.PORT}`;
const HEADERS = {'Content-Type': 'application/json'};

export default{
    login: (email, password) => {
        return new Promise((resolve, reject) => {
            fetch(`${URL}/login`, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify({
                    email,
                    password
                }),
            })
            .then(response => {console.log(response); return response.json()})
            .then(data => {
              console.log('Success: ', data);
              cookies.set('accessToken', data.accessToken);
              resolve(data)
            })
            .catch((error) => {
              reject(error)
            })
        })
    }
}