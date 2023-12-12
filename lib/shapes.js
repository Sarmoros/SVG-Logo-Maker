// user input will pick from a list of shapes, circle, triangle or square
// user input will choose a color for the shape (color keyword or hexadecimal number)

class Shapes {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }
    static getSupportedShapes() {
        return ['circle', 'triangle', 'square'];
    }
    static isValidShape(shape) {
        const supportedShapes = this.getSupportedShapes();
        return supportedShapes.includes(shape);
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 1 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shapes {  
    render() {
        return `<rect x="60" y="10" width="180" height="180" fill="${this.color}" />`
    }
}


  
    

module.exports = {Circle, Square, Triangle, Shapes};