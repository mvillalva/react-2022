import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import './Switch.css'

export default function Switch(props) {
    
    const { theme, toogleDarkMode } = useContext(MainContext);

    const handleChange = e => {
        toogleDarkMode(e, theme)
    }

    return (
        <div style={theme}>
            <div className="container">
                <span className="fs-4 me-1">☀️</span>
                <label className="switch">
                    <input type="checkbox" id="checkbox" onChange={handleChange}/>
                    <div className="slider round"></div>
                </label>
                <span className="fs-4 ms-1">🌒</span>
            </div>
        </div>
    );
}
