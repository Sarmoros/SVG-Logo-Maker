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
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="50,10 10,90 90,90" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}

class Square extends Shapes {  
    render() {
        return `<rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}


  
    

module.exports = {Circle, Square, Triangle, Shapes};