import { PROXY } from "../config/config";

const URL = `http://${PROXY.HOST}:${PROXY.PORT}/api/v1/products/`;

export default {
    getAll: () => {
        fetch(`${URL}`)
        .then(data => data.json())
        .then(json => json)
        .catch(err => console.log(err))
    },

    getAllForCategory: (category) => {
        fetch(`${URL}/${category}`)
        .then(data => data.json())
        .then(json => json)
        .catch(err => console.log(err))
    }
}
