module.exports = class Intern extends Employee {
    constructor(name, role, email, id, school) {
        super(name, role, email, id);
        this.template = "intern.html";
        this.school = school;
    }

    getTemplate() {
        return this.template;
    }

    getSchool() {
        return this.school;
    }
};
