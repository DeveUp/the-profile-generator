const Employee = require("../model/Employee");
module.exports = class Intern extends Employee {
    constructor(name, role, email, id) {
        super(name, role, email, id);
        this.template = "intern.html";
    }

    getTemplate() {
        return this.template;
    }

    get schoolProperty() {
        return this.school;
    }

    set schoolProperty(value) {
        this.school = value;
    }
};
