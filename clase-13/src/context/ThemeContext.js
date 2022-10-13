import MainContext, {themes} from './MainContext';
import React, { useState } from "react";

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.light)

    const toogleDarkMode = (e, selectedTheme) => {        
        let theme = (selectedTheme.color === 'black') ? themes.dark : themes.light
        console.log(theme)
        setTheme(theme)
    }

    return (
        <MainContext.Provider value={{theme, toogleDarkMode}}>
            {children}
        </MainContext.Provider>
    )

}

export default ThemeProvider  