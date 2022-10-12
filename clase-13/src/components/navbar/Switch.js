import React from "react";

export default function Switch(props) {

    return (
        <>
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input onChange={props.set} type="checkbox" id="checkbox" />
                <div className="slider round d-inline"></div>
            </label>
            <span>🌒</span>
        </>
    );
}
