// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = async() => {
    try{
        let answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'Description', 
                message: 'what is the description of your project?'
        
            },
            {
                type: 'input',
                name: 'Usage',
                message: 'How would a client use your app?'
        
            },
            {
                type: 'input',
                name: 'DEMO',
                message: 'enter link to app demo'
        
            },
            {
                type: 'input',
                name: 'Credits',
                message: 'did anyone else work on this project? enter their info'
        
            }
        ]);
        await fs.writeFile('index.md', generateMarkdown(answers), (err) => {
            if (err) throw err
        });
        console.log('file generated, woo!')
    } catch(e) {
        console.log(e);
    }
};
questions();


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
