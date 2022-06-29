import React, {createContext} from "react"

const UserContext = createContext({
    email: '',
    setEmail: () => {},
    displayName: '',
    setDisplayName: () => {},
    type: '',
    setType: () => {}
})

export default UserContext;