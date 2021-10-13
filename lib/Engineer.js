const Employee = require("./Employees");

class Engineer extends Employee {
    consturctor(name, id, email, github) {
        super(name, id, email,);
        this.github = github;
    }
    getGitHub() {
        return this.github
    };
    getRole() {
        return "Engineer"
    };
}
module.exports = Engineer;