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
        this.props.state.theme === themes.dark? 
        this.props.state.setTheme(themes.light) :
        this.props.state.setTheme(themes.dark)        

        return (<>            
            <ThemeContext.Provider value={this.props.state.theme}>
                <Switch set={toogleTheme} />
                <ProfileColor />                
            </ThemeContext.Provider>
        </>)
    }
}
