import { Component } from "react";
import './Input.css'

export default class Input extends Component {
  
  checkValue = (e) => {
    let input = e.target

    const add_class = (accion, icon) => {
      if (accion == 'ok') {
        input.classList.remove('error')
        input.classList.remove('fa')
        icon.classList.remove('fa-times-circle')
        icon.classList.remove('text-danger')
  
        input.classList.add('ok')
        icon.classList.add('fas')
        icon.classList.add('fa-check-circle')
        icon.classList.add('text-success')
      } else {
        input.classList.remove('ok')
        icon.classList.remove('fas')
        icon.classList.remove('fa-check')
        icon.classList.remove('text-success')
  
        input.classList.add('error')
        icon.classList.add('fas')
        icon.classList.add('fa-times-circle')
        icon.classList.add('text-danger')
      }
    }
  
    const check_text = (valor, icon) =>{
      if(valor.length >= 3)
        add_class('ok', icon)              
      else 
        add_class('error', icon)
    }
  
    const check_email = (valor, icon) => {
      let check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(check.test(valor))
        add_class('ok', icon)              
      else 
        add_class('error', icon)
    }
  
    const check_pass = (valor, icon) => {
      if(valor.length >= 8)
        add_class('ok', icon)              
      else 
        add_class('error', icon)
    }      

    let valor = input.value
    let icon = input.nextElementSibling
    
    if(input.type === 'text') check_text(valor, icon)
    if(input.type === 'email') check_email(valor, icon)
    if(input.type === 'password') check_pass(valor, icon)        
  }

  render() {

    let type = this.props.type
    let name = this.props.name
    let value = this.props.value?this.props.value:''
    let placeholder = this.props.placeholder
    let css = this.props.css
    let label = <label for={name} className="label">{this.props.label}</label>

    return(
      <div className="text-left mb-2">
        {label}
        <div className="input-content">
          <input type={type} id={name} name={name} placeholder={placeholder} className="Input" onChange={this.checkValue}/>
        
          <i className="input-icon"></i>
          <small className="text-secondary">
            {type === 'text'?'Mínimo 3 caracteres':
            type === 'email'?'Ej: mail@dominio.com':
            type === 'password'? 'Mínimo 8 caracteres':''}
          </small>
        </div>
      </div>
    )
  }
}