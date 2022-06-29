import { SERVER_REST } from "../config/config.js";
import Cookie from 'universal-cookie'

const cookie = new Cookie();
const URL = `http://${SERVER_REST.HOST}:${SERVER_REST.PORT}/api/v1/orders`
const accessToken = cookie.get('accessToken');
const HEADERS = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-type': 'application/json'
}

export default{
    getAll: (next = null) => {
        return fetch(URL, {
            headers: HEADERS
        }).then(res => res.json())
        .then(data => {console.log(data); return data;})
        .catch(err => console.log(err))
    },
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

