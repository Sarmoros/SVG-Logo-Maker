// user input will pick from a list of shapes, circle, triangle or square
// user input will choose a color for the shape (color keyword or hexadecimal number)

class Shapes {
    static getSupportedShapes() {
        return ['circle', 'triangle', 'square'];
    }
    static isValidShape(shape) {
        const supportedShapes = this.getSupportedShapes();
        return supportedShapes.includes(shape);
    }
}

  
    

    module.exports = Shapes;