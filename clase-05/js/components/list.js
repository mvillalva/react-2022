export default class List {
  constructor(elements, css='') {
    this.elements = elements
    this.css = css
  }  

  render() {
    let objetos =  ['Button', 'Video', 'Audio', 'List', 'Input', 'Form']

    if(typeof this.elements == 'object'){
      let html = `<ul class="${this.css}">`
      
      this.elements.forEach(element => {
        if(typeof element == 'object' && objetos.includes(element.constructor.name))
          html += `<li>${element.render()}</li>`
        else
          html += `<li>${element}</li>`
      });

      html += '</ul>'

      return html
    } else {
      return `<ul><li>${this.elements}</li></ul>`
    }
  }
}