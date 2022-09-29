import React from "react";
import './Sound.css';

export function Sound(props){
    return (
      <>
      <audio controls autoPlay loop muted>
        <source src={ props.src } type={props.type}></source>
      </audio>
    </>
    )
}
