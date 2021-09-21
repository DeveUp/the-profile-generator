import Employee from './Employee';

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;;
        this.setRole("Intern");
    }

    getTemplate() {
        this.template = this.template ?? "intern.html";
        return this.template;
    }

    setTemplate(template) {
        this.template = template;
    }

    getSchool() {
        return this.school;
    }

    setSchool(school) {
        this.school = school;
    }
};

export default Intern;
