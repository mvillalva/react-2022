export default class Button {
  constructor(text, css) {
      this.text = text
      this.css = css
  }

  render() {
      return `<button class="${this.css}">${this.text}</button>`
  }
}