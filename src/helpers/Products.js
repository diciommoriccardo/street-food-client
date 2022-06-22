import { PROXY } from "../config/config";

const URL = `http://${PROXY.HOST}:${PROXY.PORT}/api/v1/products/`;
const test = [
    {
        "_id": "62b1e9cd7d9ae6a5807efc6e",
        "displayName": "Panino 18",
        "description": "Ci bell panein nu spettacl",
        "price": 12.5,
        "__v": 0
    },
    {
        "_id": "62b1e9e17d9ae6a5807efc70",
        "displayName": "Panino 30",
        "description": "Ci bell panein nu spettacl",
        "price": 30,
        "__v": 0
    },
    {
        "_id": "62b1e9fd7d9ae6a5807efc72",
        "displayName": "Bibita 30",
        "description": "Ci bell chessa bebt nu spettacl",
        "price": 30,
        "__v": 0
    }
]

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
