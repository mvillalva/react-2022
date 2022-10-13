import React from "react";

export const themes = {
    dark : {
        color: 'white',
        background: '#282c34',
        padding: '15px',
        transition: '200ms ease-in' 
    },
    light : {
        color: 'black',
        background: 'white',
        padding: '15px',
        transition: '200ms ease-in' 
    }
};

const MainContext = React.createContext();

export default MainContext;