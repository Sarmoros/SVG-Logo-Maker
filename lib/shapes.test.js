const { Shapes, Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
    test('Shapes creation', () => {
        const supportedShapes = Shapes.getSupportedShapes();
        expect(supportedShapes).toEqual(['circle', 'triangle', 'square']);
    });

    test('Shapes validation', () => {
        const validShape = Shapes.isValidShape('circle');
        expect(validShape).toBeTruthy();
    });

    test("creates a red circle", () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toBe(`<circle cx="150" cy="100" r="90" fill="red" />`);
    })

    test("creates a blue triangle", () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toBe(`<polygon points="150, 1 244, 182 56, 182" fill="blue" />`);
    })

    test("creates a green square", () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toBe(`<rect x="60" y="10" width="180" height="180" fill="green" />`);
    })
});