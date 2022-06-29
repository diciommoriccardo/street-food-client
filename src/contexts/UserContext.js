import React, {createContext} from "react"

const UserContext = createContext({
    user: {},
    setUser: () => {},
    loggedIn: false,
    setLoggedIn: () => {}
})

export default UserContext;