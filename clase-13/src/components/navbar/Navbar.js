import React, { useContext } from "react";
import Switch from "./Switch";
import "./Navbar.css";
import MainContext from "../../context/MainContext";

const ProfileColor = () => {
    const { theme } = useContext(MainContext);
    return <div style={theme} className="fs-1">Utilizando UseContext!</div>;
}

export default function Navbar(props) {    
    return (
        <>
            <Switch />
            <ProfileColor />            
        </>
    );
}
