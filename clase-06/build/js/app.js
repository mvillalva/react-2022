import Button from './components/buttons.js'
import Video from './components/video.js'
import Audio from './components/audio.js'
import List from './components/list.js'
import Input from './components/input.js'
import Form from './components/form.js'

const myApp = document.getElementById('myApp')

let elementos = [
  'Elemento 1', 
  'Elemento 2', 
  new Button('Elemento 3', 'btn btn-warning'),
  new Button('Elemento 4', 'btn btn-danger'),
]

let myList = new List(elementos, 'text-light my-2')
let myVideo = new Video('../../clase-05/video/video.mp4', 0, 0, 'video/mp4', 'video1', 'rounded-3 w-100', true, true, true)
let myAudio = new Audio('../../clase-05/audio/audio.mp3', 'audio/mpeg', 'audio1', '', 'controls autoplay loop')
let myButton = new Button('Login', 'btn btn-outline-info')
let myForm = new Form('form1', '', '', 'row w-100')
let myText = new Input('text', 'text1', 'text1', '', 'Ingrese su nombre', 'form-control mb-2', 'required', 'Nombre', 'form-label')
let myEmail = new Input('email', 'email1', 'email1', '', 'Ingrese su email', 'form-control mb-2', 'required', 'Email', 'form-label')
let myPassword = new Input('password', 'password1', 'password1', '', 'Ingrese su contraseña', 'form-control mb-2', 'required', 'Contraseña', 'form-label')
let mySubmit = new Input('submit', 'submit1', 'submit1', 'Enviar', '', 'btn btn-primary w-100 mb-2', '', '', '')

myApp.innerHTML = ` <div class="row mb-2">
                      <div class="col-12 col-md-6">
                        <div class="video">
                          <h1 class="video-title text-light bg-dark rounded-3 p-2 opacity-75">Componente Video</h1>
                          ${myVideo.render()}
                        </div>
                      </div>
                      <div class="col-12 col-md-6 text-light">
                        <h2>Componente Form</h2>                        
                        ${myForm.render()}
                      </div>
                    </div>
                    <h3>Componente Audio</h3>
                    ${myAudio.render()}
                    <h3 class="mt-3">Componente Button</h3>
                    ${myButton.render()}
                    <h3 class="mt-3">Componente List</h3>
                    ${myList.render()}
                  `
myAudio.volumen(.5)

let form1 = document.getElementById(myForm.id)
form1.innerHTML = ` ${myText.render()}
                    ${myEmail.render()}
                    ${myPassword.render()}
                    ${mySubmit.render()}
                  `
myText.verify()
myEmail.verify()
myPassword.verify()