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
        expect(circle.render()).toBe(`<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />`);
    })

    test("creates a blue triangle", () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toBe(`<polygon points="50,10 10,90 90,90" stroke="black" stroke-width="3" fill="blue" />`);
    })

    test("creates a green square", () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toBe(`<rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="3" fill="green" />`);
    })
});