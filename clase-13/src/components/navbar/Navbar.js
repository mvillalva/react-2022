import React from "react";
import Switch from "./Switch";
import "./Navbar.css";

const ProfileColor = ({style}) => {
    return <div style={style} className="fs-1">Utilizando UseContext!</div>;
}

export default function Navbar(props) {
    return (
        <>
            <Switch toogleTheme={props.toogleTheme} style={props.style} />
            <ProfileColor style={props.style} />            
        </>
    );
}
