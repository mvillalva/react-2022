import React from "react";

// Defino un estado por defecto
// de mi web-app
const defaultState = {
    darkMode : false
};

const MainContext = React.createContext(defaultState);

export default MainContext;