'Use strict'

const ReactElement = React.createElement

export class Button extends React.Component {

  render() {
    return ReactElement(
      'button',
      {'className' : 'btn btn-primary' },
      'Componente "Button"',      
    )    
  }

}

export class Video extends React.Component {

  render() {
    return ReactElement(
      'video',
      { 
        'controls':true,
        'autoPlay': true,
        'className':'rounded-3',
        'id' : 'video'
       },
    )    
  }

}

const domContainer = document.getElementById('myApp')

ReactDOM.render(ReactElement(Video), domContainer)

const video = document.getElementById('video')
video.innerHTML= '<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">'