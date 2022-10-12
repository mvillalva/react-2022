import React, { useContext, useState } from "react";
import Switch from "./Switch";
import ThemeContext, { themes } from "../../context/MainContext";
import "./Navbar.css";

const ProfileColor = (props) => {
    const theme = useContext(ThemeContext)        
    return <div style={theme}>Hola Mundo!</div>;
}

export default function Navbar(props) {   
    const [theme, setTheme] = useState(themes.light)

    const toogleTheme = () => 
        theme === themes.dark? 
        setTheme(themes.light) :
        setTheme(themes.dark)

    return (
        <>            
            <ThemeContext.Provider value={theme}>
                <Switch set={toogleTheme} />
                <ProfileColor />                
            </ThemeContext.Provider>
        </>
    );
}
