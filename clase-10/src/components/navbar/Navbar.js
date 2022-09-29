import React from "react";

export default function Navbar(props) {    
        return (
            <>
                <img src={ props.src } width={ props.size } alt="logo-navbar"></img>
            </>
        )    
}


Navbar.defaultProps = {
    size: 60
}