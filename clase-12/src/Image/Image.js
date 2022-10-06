import React from "react";

export default function Image(props) {
   
    return (
        <div className="position-relative">
            <h1 className={"position-absolute p-3 " + props.css}>{props.label}</h1>
            <img className="w-100 rounded-2 shadow" src={props.src} alt='Imagen' />
        </div>
    )
}