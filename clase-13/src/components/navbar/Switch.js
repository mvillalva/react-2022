import React, { useContext } from "react";
import ThemeContext from "../../context/MainContext";
import './Switch.css'

export default function Switch(props) {  
    const theme = useContext(ThemeContext)  

    return (
        <div style={theme}>
            <div className="container">
                <span className="fs-4 me-1">☀️</span>
                <label className="switch">
                    <input type="checkbox" id="checkbox" onChange={props.set}/>
                    <div className="slider round"></div>
                </label>
                <span className="fs-4 ms-1">🌒</span>
            </div>
        </div>
    );
}
