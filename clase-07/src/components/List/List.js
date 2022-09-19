import { Component } from "react";
import './List.css'

export default class List extends Component {

  render() {
    let items = this.props.items
    const listItems = items.map(item => <li>{item}</li>)    

    return (
      <ul className="List">
        {listItems}
      </ul>
    )
  }
}