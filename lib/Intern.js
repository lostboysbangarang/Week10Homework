const Employee = require("./Employees");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email,);
        this.school = school;
    };
    getUniqueID() {
        return this.school
    };
    getRole() {
        return "Intern"
    };
    getUnique() {
        return "University:"
    }
    getSVG() {
        return `<img src="../assests/school.svg" alt="" class="Icon">`
    }
}
module.exports = Intern;