const Employee = require("./Employees");

class Intern extends Employee {
    consturctor(name, id, email, school) {
        super(name, id, email,);
        this.school = school;
    }
    getSchool() {
        return this.school
    };
    getRole() {
        return "Intern"
    };
}
module.exports = Intern;