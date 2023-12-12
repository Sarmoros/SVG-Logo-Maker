const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square, Shapes } = require('./lib/shapes');
const SVG = require('./lib/text');
const { run } = require('jest');

// function to generate the logo
async function runLogoMaker() {
    const text = await promptForText();
    const textColor = await promptForTextColor();
    const shape = await promptForShape();
    const shapeColor = await promptForShapeColor();

    // missing logic to generate the SVG logo
    try {
        const svg = new SVG();
        shape.setColor(shapeColor);
        svg.setShape(shape);
    
        svg.setText(text, textColor);
        const logo = svg.render();
        fs.writeFileSync('./logo.svg', logo);
    } catch (error) {
        console.error(error);
    }
}


// maybe how to write the questions for input?
// should they stay on index.js or should they be moved to another file?
async function promptForText() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: (input) => input.length > 0 && input.length <= 3,
      },
    ]);
    return answers.text;
}

async function promptForTextColor() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword or hexadecimal number for the text:',
        },
    ]);
    return answers.textColor;
}

async function promptForShape() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ["Circle", "Triangle", "Square"]
        },
    ]);
    let shape = answers.shape
    switch (shape) {
        case "Circle":
            shape = new Circle();
            break;
        case "Triangle":
            shape = new Triangle();
            break;
        case "Square":
            shape = new Square();
            break;
    }
    return shape;
}

async function promptForShapeColor() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword or hexadecimal number for the shape color:',
        },
    ]);
    return answers.shapeColor;
}

runLogoMaker();