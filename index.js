
import { Circle, Square, Triangle } from './lib/shape.js'
import inquirer from 'inquirer'

// Function to ensure that user has inputted a valid text length
const validateLogoText = async (input) => {
    if (input.length > 3){
        return "Please respond with three or less characters"
    } return true
}

const validateShort = async (input) => {
    if (input.length < 3){
        return "Please respond with three or less characters"
    } return true
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like for your logo?',
        validate: validateLogoText
    },
    {
        type: 'input',
        name: "textColor",
        message: "What color would you like your text to be? (keyword or hex)",
        validate: validateShort
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: 'input',
        name: "shapeColor",
        message: "What color would you like your shape to be? (keyword or hex)",
        validate: validateShort
    },
    {
        type: "confirm",
        name: "continue",
        message: "About to generate your logo! Would you like to create another SVG?",
    },
]

function getResponses(){
    return inquirer.prompt(questions).then((answers) => {
        switch(answers.shape){
            case "Circle":
                new Circle(answers.shapeColor, answers.textColor, answers.text).saveLogo()
                break;
            case "Square":
                new Square(answers.shapeColor, answers.textColor, answers.text).saveLogo()
                break;
            default:
                new Triangle(answers.shapeColor, answers.textColor, answers.text).saveLogo()
                break;
        }        
        if (answers.continue) {
          return getResponses();
        }
      });
}

getResponses()
  .then("Logo generator shutting down...")
  .catch((error) => {});


