module.exports = class Engineer extends Employee {
    constructor(name, role, email, id, github) {
        super(name, role, email, id);
        this.template = "engineer.html";
        this.github = github;
    }

    getTemplate() {
        return this.template;
    }

    getGithub() {
        return this.github;
    }
};
