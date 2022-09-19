import React, { Component } from 'react'
import './Audio.css'

export default class Audio extends Component {

  render() {
    let type = this.props.type
    let url = this.props.url
    let css = this.props.css

    return (
              <audio className={css} controls>
                <source src={'.'+url} type={type} />
              </audio>
            )
  }
}