import React from "react";
import './Video.css';

export function Video(props) {
    return (
        <>
          <video controls autoPlay loop muted className="rounded-3 shadow" >
            <source src={ props.src } type={props.type}></source>
          </video>
        </>
    )
}
