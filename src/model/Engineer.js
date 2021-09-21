import Employee from './Employee';

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.setRole("Engineer");
    }

    getTemplate() {
        this.template = this.template ?? "engineer.html";
        return this.template;
    }

    setTemplate(template) {
        this.template = template;
    }

    getGithub() {
        return this.github;
    }

    setGithub(github) {
        this.github = github;
    }
};

export default Engineer;