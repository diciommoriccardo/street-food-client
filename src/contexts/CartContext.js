import React, { createContext } from "react"

const CartContext = createContext({
    count: 0,
    setCount: () => {}
})

export default CartContext;