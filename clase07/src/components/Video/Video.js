import { Component } from "react"

export default class Video extends Component{

  render() {
    let url = this.props.url
    let type = this.props.type
    let css = this.props.css
    return (
              <video className={css} controls>
                <source src={url} type={type} />
              </video>
            )
  }
}