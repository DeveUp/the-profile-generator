const Employee = require("../model/Employee");
module.exports = class Engineer extends Employee {
    constructor(name, role, email, id) {
        super(name, role, email, id);
        this.template = "engineer.html";
    }

    getTemplate() {
        return this.template;
    }

    get githubProperty() {
        return this.github;
    }
    set githubProperty(value) {
        this.github = value;
    }
};
