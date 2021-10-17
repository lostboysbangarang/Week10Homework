const Employee = require("./Employees");

class Manager extends Employee {
    constructor(name, id, email, roomNum) {
        super(name, id, email,);
        this.roomNum = roomNum;
    };
    getUniqueID() {
        return this.roomNum
    };
    getRole() {
        return "Manager"
    };
    getUnique() {
        return "Room Number:"
    }
    getSVG() {
        return `<img src="../assests/coffee.svg" alt="" class="Icon">`
    }
}
module.exports = Manager;