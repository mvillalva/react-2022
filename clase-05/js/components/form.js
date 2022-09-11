export default class Form {
  constructor(id='', action='', method='', css='') {
    this.id = id
    this.action = action
    this.method = method
    this.css = css
  }
  
  render() {
    return `<form ${this.id?'id="'+this.id+'"':''} 
                  ${this.action?'action="'+this.action+'"':''}
                  ${this.method?'method="'+this.method+'"':''}
                  class="${this.css}">
            </form>`
  }
}