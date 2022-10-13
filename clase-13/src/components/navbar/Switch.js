import React, {useContext} from "react";
import MainContext from "../../context/MainContext";
import './Switch.css'

export default function Switch(props) {
    const {isOn} = props;
    const { darkMode, toggleDarkMode } = useContext(MainContext);

    function handleChange(e) {
        toggleDarkMode(e, darkMode);
    }

    return (
        <div style={props.style}>
            <div className="container">
                <span className="fs-4 me-1">☀️</span>
                <label className="switch">
                    <input checked={isOn} type="checkbox" id="checkbox" onChange={handleChange}/>
                    <div className="slider round"></div>
                </label>
                <span className="fs-4 ms-1">🌒</span>
            </div>
        </div>
    );
}
