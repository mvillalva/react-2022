import React, { useState } from "react";

export const themes = {
    dark : {
        color: 'white',
        background: '#282c34',
        padding: '15px',
        transition: '200ms ease-in' 
    },
    light : {
        color: 'black',
        background: 'white',
        padding: '15px',
        transition: '200ms ease-in' 
    }
};

const Context = React.createContext()

export function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState(themes.light)    

    return (
        <Context.Provider value={{theme, setTheme}}>
            {children}
        </Context.Provider>
    )

}

export default Context