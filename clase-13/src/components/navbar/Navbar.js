import React, { Component } from 'react';
import Switch from "./Switch";
import MainContext from '../../context/MainContext';
import './Navbar.css';

function ProfileColor() {
    const { darkMode } = React.useContext(MainContext);
    const style = darkMode ? 'dark': 'light';
    
    return (
        <div className={style }>
            Hello color
        </div>
    );
}

export default class Navbar extends Component{
    // Constructor del componente, nos aseguramos de que tenga lo que necesita.
    constructor(props) {
        super();
        console.log("Se construyo el navbar");
    }

    // Metodo render, dentro del ciclo de vida del componente
    render() {
        return (
            <>
            <Switch></Switch>
            <ProfileColor></ProfileColor>
            </>
        );
    }

    componentDidUpdate(){
        console.log("componentDidUpdate...");
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log("Esto es lo que esta por suceder.. ");
    }


}