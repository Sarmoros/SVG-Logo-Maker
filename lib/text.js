// user input will enter up to 3 characters
// user will choose a text color (color keyword or hexadecimal number)

class SVG {
    constructor() {
      this.text = "";
      this.shape = "";
    }

    render() {
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

    setText(text, color) {
      this.text = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}">${text}</text>`;
      
    }

    setShape(shape) {
      this.shape = shape.render();
    }
  
    // maybe add any methods or logic related to text manipulation if needed
  }
  
  module.exports = SVG;