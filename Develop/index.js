// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');


// TODO: Create an array of questions for user input
const questions = () =>{
    const info=[];
    return inquirer.prompt( [
        {
            type: 'input',
            name: 'Title',
            message: 'Your title',
            default: 'professional README.md Generator'
        },
        {
            type: 'input',
            name:'Description',
            message:'Your Description'
        },
        {
            type: 'input',
            name: 'TableofContents',
            message: 'Your Contents',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Installation information',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Usage',
        },
        {
            type: 'input',
            name: 'Licences',
            message: 'License',
        },
        {
            type: 'input',
            name: 'Features',
            message: 'Feature',
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Contributing',
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Test',
        },
    ])
};
const generateTxT= (title, description, content,install,licence,feature,contributing,test)=>{
    return`
    #  ${title}
    ##Description
    ${description}
    ##Content
    ${content}
    ##Install
    ${install}
    ##Licence
    ${licence}
    ##Feature
    ${feature}
    ##Contributing
    ${contributing}
    ##Test
    ${test}
    `
}
questions().then(
    item=> 
    fs.writeFile('../README.md',generateTxT(
        item.Title,item.Description,item.TableofContents,item.Installation,item.Licences,item.Features,item.Contributing,item.Test),err=>{
if (err) throw err;
console.log ('lets test')
})
)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
