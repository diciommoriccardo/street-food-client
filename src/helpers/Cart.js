
export default{
    getAllLocal: () => {
        return new Promise((resolve) => {
            let products = [];
            let keys = Object.keys(localStorage)

            keys.forEach(index => {
                products.push(JSON.parse(localStorage.getItem(index)))
            })
            
            console.log(products)
            resolve(products)
        })
    }
}