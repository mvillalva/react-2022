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
    
    return (
        <>            
            <ThemeContext.Provider value={theme}>
                <Switch set={setTheme}></Switch>
                <ProfileColor />                
            </ThemeContext.Provider>
        </>
    );
}
