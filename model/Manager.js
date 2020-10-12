const Employee = require("../model/Employee");
module.exports = class Manager extends Employee {
    constructor(name, role, email, id) {
        super(name, role, email, id);
        this.template = "manager.html";
    }

    getTemplate() {
        return this.template;
    }

    get officeNumberProperty() {
        return this.officeNumber;
    }

    set officeNumberProperty(value) {
        this.officeNumber = value;
    }
};
