const Employee = require('./Employee.js');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email, "Enginer", "engineer.html");
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    setGithub(github) {
        this.github = github;
    }
};

module.exports= Engineer;