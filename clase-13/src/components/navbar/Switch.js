import React from "react";
import './Switch.css'

export default function Switch(props) {      
    return (
        <div style={props.style}>
            <div className="container">
                <span className="fs-4 me-1">☀️</span>
                <label className="switch">
                    <input type="checkbox" id="checkbox" onChange={props.toogleTheme}/>
                    <div className="slider round"></div>
                </label>
                <span className="fs-4 ms-1">🌒</span>
            </div>
        </div>
    );
}
