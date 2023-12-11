const fs = require('fs');
const inquirer = require('inquirer');
const Shapes = require('./lib/shapes');
const Text = require('./lib/text');



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
            choices: Shapes.getSupportedShapes(),
        },
    ]);
    return answers.shape;
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

// create function to generate the SVG logo
