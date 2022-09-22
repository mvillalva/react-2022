'Use strict'

const ReactElement = React.createElement

export default class Button extends React.Component {

  render() {
    return ReactElement(
      'button',
      {'className' : 'btn btn-primary' },
      'Componente "Button"',      
    )    
  }

}

const domContainer = document.getElementById('myApp')

ReactDOM.render(ReactElement(Button), domContainer)