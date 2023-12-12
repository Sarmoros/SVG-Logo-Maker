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


// function to prompt user for text
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

// function to prompt user for text color
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

// function to prompt user for shape
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

// function to prompt user for shape color
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