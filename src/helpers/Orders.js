import { SERVER_REST } from "../config/config.js";
import Cookie from 'universal-cookie'

const cookie = new Cookie();
const URL = `http://${SERVER_REST.HOST}:${SERVER_REST.PORT}/api/v1/orders`


export default{
    getAll: (next = null) => {
        const accessToken = cookie.get('accessToken');
        const HEADERS = {
            'Authorization': `Bearer ${accessToken}`,
            'Content-type': 'application/json'
        }

        return fetch(URL, {
            headers: HEADERS
        }).then(res => res.json())
        .then(data => {console.log(data); return data;})
        .catch(err => console.log(err))
    },

    add: (order) => {
        return new Promise((resolve, reject) => {
            const accessToken = cookie.get('accessToken');
            const HEADERS = {
                'Authorization': `Bearer ${accessToken}`,
                'Content-type': 'application/json'
            }

            fetch(`${URL}`, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify(order)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}
// export default {
    

//     getOne: (id) => {
//         return fetch(BASE_URL + '/' + id, {
//             headers: HEADERS
//         }).then(res => res.json())
//             .then(data => data)
//     },

//     postReview: (requestBody) => {
//         return fetch(BASE_URL + '/review',
//             {
//                 method: 'post',
//                 body: JSON.stringify(requestBody),
//                 headers: HEADERS
//             })
//             .then(res => res.json())
//     }
// }

