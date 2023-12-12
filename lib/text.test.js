const SVG = require('./text');
const { Triangle, Square, Circle } = require('./shapes');

describe('SVG', () => {
    test('creates a triangle SVG', () => {
        const svg = new SVG();
        const triangle = new Triangle();
        const expected = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 1 244, 182 56, 182" fill="yellow" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red">ABC</text></svg>`;
        triangle.setColor('yellow');
        svg.setText('ABC', 'red');
        svg.setShape(triangle);
        
        expect(svg.render()).toBe(expected);
    });

});