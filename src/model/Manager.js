import Employee from './Employee';

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.setRole("Manager");
    }

    getTemplate() {
        this.template = this.template ?? "manager.html";
        return this.template;
    }

    setTemplate(template) {
        this.template = template;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    setOfficeNumber(officeNumber) {
        this.officeNumber = officeNumber;
    }
};

export default Manager;
