const SVG = require('./text');
const { Triangle, Square, Circle } = require('./shapes');

describe('SVG', () => {
    test('creates a triangle SVG', () => {
        const svg = new SVG();
        const triangle = new Triangle();
        const expected = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 10,90 90,90" stroke="black" stroke-width="3" fill="yellow" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red">ABC</text></svg>`;
        triangle.setColor('yellow');
        svg.setText('ABC', 'red');
        svg.setShape(triangle);
        
        expect(svg.render()).toBe(expected);
    });
    // add more tests if needed 

});