import React, { Component } from 'react'
import './Button.css'

export default class Button extends Component {

  render() {
    let label = this.props.label
    let css = this.props.css? this.props.css : 'Button button-primary'    

    return(
      <button className={css}>{label}</button>
    )
  }

}