const Employee = require("../model/Employee");
module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.template = "engineer.html";
        this.github = github;
        this.role = "Engineer";
    }

    getTemplate() {
        return this.template;
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }
};
