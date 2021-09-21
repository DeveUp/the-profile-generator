const Employee = require('./Employee.js');

class Intern extends Employee {

    constructor(name, id, email, image, school) {
        super(name, id, email, image, "Intern", "intern.html");
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    setSchool(school) {
        this.school = school;
    }
};

module.exports= Intern;
