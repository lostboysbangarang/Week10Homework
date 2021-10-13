const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { choices } = require("yargs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const path =require("path");
const fs = require("fs");
const util = require("util");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const opp = path.join(OUTPUT_DIR, "team.html");

var newReqruits = [];



const questions = [
    {type: "input",     message: "Employee name:\t",                                    name: "impName"},
    {type: "input",     message: "Next, ID°:\t",                                        name: "impID"},
    {type: "input",     message: "Electronic Mail Address:\t",                          name: "hotMail"},
    {type: "list",      message: "Role Individual plays in Coorporation:\t",            
                        choices: ["Engineer", "Intern", "Manager"],                     name: "impNPC"}
];
const engineerInq = [
    {type: "input",     message: "What alias does this indivdual use on GitHub:\t",     name: "impGitHub"},
    {type: "confirm",   message: "Add another to the fold?\n",                          name: "impGenerator"}
];
const managerInq = [
    {type: "input",     message: "What room can this individual be found in:\t",        name: "impLoc"},
    {type: "confirm",   message: "Add another to the fold?\n",                          name: "impGenerator"}
];
const internInq = [
    {type: "input",     message: "What institute of learning does this one attend:\t",  name: "hogwarts"},
    {type: "confirm",   message: "Add another to the fold?\n",                          name: "impGenerator"}
]

function SpainishInquisition() {
    inquirer.prompt(questions)
        .then(results => {
            if (results.impNPC === "Engineer") {
                knightTemplar(results);
            } else if (results.impNPC === "Manager") {
                highPrist(results);
            } else {
                chaplinAid(results);
            }
        }
        )
}
function knightTemplar(qualifications) {
    inquirer.prompt(engineerInq)
        .then(results => {
            const newEngineer = new Engineer(results.impName, results.impID, results.hotMail, results.impGitHub);
            newReqruits.push(newEngineer);
            if (results.impGenerator === true) {
                SpainishInquisition();
            } else {
                buildTeam();
            }
        })
}

const buildTeam = () => {
    console.log("Team Gatherd\n\tAwaiting orders");
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(opp, render(newReqruits), "utf-8");
}


