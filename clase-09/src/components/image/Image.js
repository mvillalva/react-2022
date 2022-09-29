import React, { Component } from "react";
import image from '../../assets/img/logo.png'

export default class Image extends Component {
    render() {
        return (
            <>
                <img src={ image } width={ 60 } alt="imagen"></img>
            </>
        )
    }
}
