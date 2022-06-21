import { PROXY } from "../config/config.js";

const URL = `http://${PROXY.HOST}:${PROXY.PORT}/api/v1/orders`

export default{
    getAll: (next = null) => {
        return fetch(URL, {
            //headers: HEADERS
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

