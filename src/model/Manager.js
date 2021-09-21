const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager", "manager.html");
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    setOfficeNumber(officeNumber) {
        this.officeNumber = officeNumber;
    }
};

module.exports= Manager;
