import React, { Component, useContext } from "react";
import Switch from "./Switch";
import ThemeContext, { themes } from "../../context/MainContext";
import "./Navbar.css";

const ProfileColor = (props) => {
    const theme = useContext(ThemeContext)        
    return <div style={theme}>Hola Mundo!</div>;
}

export default class Navbar extends Component {
    constructor(props) {
        super();        
    }

    render() {
        const toogleTheme = () => 
        this.props.theme === themes.dark? 
        this.props.set(themes.light) :
        this.props.set(themes.dark)

        return (<>            
            <ThemeContext.Provider value={this.props.theme}>
                <Switch set={toogleTheme} />
                <ProfileColor />                
            </ThemeContext.Provider>
        </>)
    }
}
