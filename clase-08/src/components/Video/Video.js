import React, { Component } from "react"

export default class Video extends Component {

  render() {    
    let url = this.props.url
    let type = this.props.type
    let css = this.props.css
    return (
              <video className={css} controls muted autoPlay loop>
                <source src={'.'+url} type={type} />
              </video>
            )
  }
}