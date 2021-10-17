const Employee = require("./Employees");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getUniqueID() {
        return `<a href="https://github.com/${this.github}">${this.github}</a>`
    };
    getRole() {
        return "Engineer"
    };
    getUnique() {
        return "GitHub:"
    }
    getSVG() {
        return `<img src="../assests/computer-classic.svg" alt="" class="Icon">`
    }
}
module.exports = Engineer;