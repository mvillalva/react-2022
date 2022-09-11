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
    input.addEventListener('keyup', e => {
      let valor = e.target.value
      if(valor.length > 3){
        input.classList.add('ok')
        input.classList.remove('error')
      }
      else {
        input.classList.remove('ok')
        input.classList.add('error')
      }
    })
  }

  render() {
    let html =''
    if (this.label) {
      html += `<label ${this.name?'for="'+this.name+'"':''} class="${this.label_css}">${this.label}</label>`
    }
    html += `<input type='${this.type}'
                    ${this.id?'id="'+this.id+'"':''} 
                    ${this.name?'name="'+this.name+'"':''} 
                    ${this.value?'value="'+this.value+'"':''} 
                    ${this.placeholder?'placeholder="'+this.placeholder+'"':''} 
                    ${this.properties} 
                    class="${this.css}"
                />`
    return html
  }
}