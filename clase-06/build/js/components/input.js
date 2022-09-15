export default class Input {
  constructor(type, name, id, value='', placeholder= '', css='', properties='', label='', label_css='') {
    this.type = type
    this.name = name
    this.id = id
    this.value = value
    this.placeholder = placeholder
    this.css = css
    this.properties = properties
    this.label = label
    this.label_css = label_css    
  }

  verify() {

    let input = document.getElementById(this.id)

    const add_class = (accion, icon) => {
      if (accion == 'ok') {
        input.classList.remove('error')
        icon.classList.remove('fa')
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

    input.addEventListener('keyup', e => {
      let valor = e.target.value
      let icon = e.target.nextElementSibling
      
      if(this.type === 'text') check_text(valor, icon)
      if(this.type === 'email') check_email(valor, icon)
      if(this.type === 'password') check_pass(valor, icon)
    })
  }

  render() {
    let html =''
    if (this.label) {
      html += `<label ${this.name?'for="'+this.name+'"':''} class="${this.label_css}">${this.label}</label>`
    }
    html += ` <div class="input-content mb-2">
                <input type='${this.type}'
                      ${this.id?'id="'+this.id+'"':''} 
                      ${this.name?'name="'+this.name+'"':''} 
                      ${this.value?'value="'+this.value+'"':''} 
                      ${this.placeholder?'placeholder="'+this.placeholder+'"':''} 
                      ${this.properties} 
                      class="${this.css}"
                />
                <i class="input-icon"></i>
                ${this.type=='text' ?'<small class="text-secondary">Mínimo 3 caracteres</small>':
                  this.type=='email'?'<small class="text-secondary">Ej: mail@dominio.com</small>':
                  this.type=='password'?'<small class="text-secondary">Mínimo 8 caracteres</small>':''}                
              </div>
            `
    return html
  }
}