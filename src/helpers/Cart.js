
export default{
    getAllLocal: () => {
        return new Promise((resolve) => {
            let products = [];
            let keys = Object.keys(localStorage)

            keys.forEach(index => {
                // console.log(JSON.parse(localStorage.getItem(index)))
                products.push(JSON.parse(localStorage.getItem(index)))
            })

            resolve(products)
        })
    }
}