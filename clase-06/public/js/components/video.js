export default class Video {
  constructor(url, width, height, type, id='', css='', controls=false, autoplay=true, loop=false) {
    this.url = url
    this.height = height
    this.width = width
    this.type = type
    this.id = id
    this.css = css
    this.controls = controls?'controls':''
    this.autoplay = autoplay?'autoplay':''
    this.loop = loop?'loop':''
  }

  volumen(value) {
    let video = document.getElementById(this.id)
    video.volume = value
  }

  render() {
    return `<video ${this.id?'id="'+this.id+'"':''} 
                   ${this.width>0?'width="'+this.width+'"':''} 
                   ${this.height>0?'height="'+this.height+'"':''} 
                   ${this.controls} 
                   ${this.autoplay} 
                   ${this.loop}
                   class="${this.css}">
              <source src="${this.url}" type="${this.type}">
            </video>`
  }
}