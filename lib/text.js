// user input will enter up to 3 characters
// user will choose a text color (color keyword or hexadecimal number)

class SVG {
    constructor() {
      this.text = "";
      this.shape = "";
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

    setText(text, color) {
      this.text = `<text x="50%" y="50%" dominant-baseline="middle" font-size="70" text-anchor="middle" fill="${color}">${text}</text>`;
      
    }

    setShape(shape) {
      this.shape = shape.render();
    }
  }
  
  module.exports = SVG;