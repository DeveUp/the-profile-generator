const Employee = require("../model/Employee");
module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.template = "intern.html";
        this.school = school;
        this.role = "Intern";
    }

    getTemplate() {
        return this.template;
    }

    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }
};
