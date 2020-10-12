const Employee = require("../model/Employee");
module.exports = class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.template = "manager.html";
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getTemplate() {
        return this.template;
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};
