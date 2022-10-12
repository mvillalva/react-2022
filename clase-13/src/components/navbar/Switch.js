import React, { useContext } from "react";
import ThemeContext, {themes} from "../../context/MainContext";

export default function Switch(props) {
    const {theme} = useContext(ThemeContext)
    
    const toogleTheme = () => 
        theme === themes.dark? 
        props.set(themes.light) :
        props.set(themes.dark)

    return (
        <>
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input onChange={toogleTheme} type="checkbox" id="checkbox" />
                <div className="slider round d-inline"></div>
            </label>
            <span>🌒</span>
        </>
    );
}
