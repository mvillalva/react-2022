export default class Audio {
  constructor(url, type, id='', css='', properties='') {
    this.url = url
    this.type = type
    this.id = id
    this.css = css
    this.properties = properties
  }

  volumen(value) {
    let audio = document.getElementById(this.id)
    audio.volume = value
  }

  render() {
    return `<audio ${this.id?'id="'+this.id+'"':''} class="${this.css}" ${this.properties}>
              <source src="${this.url}" type="${this.type}">
            </audio>`
  }
}