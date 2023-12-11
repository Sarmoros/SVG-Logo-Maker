const { default: test } = require('node:test');
const Shapes = require('./shapes');
const exp = require('constants');

describe('Shapes', () => {
    test('Shapes creation', () => {
        const supportedShapes = Shapes.getSupportedShapes();
        expect(supportedShapes).toEqual(['circle', 'triangle', 'square']);
    });

    test('Shapes validation', () => {
        const validShape = Shapes.isValidShape('circle');
        expect(validShape).toBeTruthy();
    });
});