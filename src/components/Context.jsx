import React , {createContext, useState} from "react";

export const ContextCreated = createContext(null);

export const ContextProvider = (props) => {
    const [country , setCountry] = useState(null)
    return (
        <ContextCreated.Provider value={{country , setCountry}} >
            {props.children}
        </ContextCreated.Provider>
    )
}