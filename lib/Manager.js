const Employee = require("./Employees");

class Manager extends Employee {
    consturctor(name, id, email, roomNum) {
        super(name, id, email,);
        this.roomNum = roomNum;
    }
    getRoomNum() {
        return this.roomNum
    };
    getRole() {
        return "Manager"
    };
}
module.exports = Manager;