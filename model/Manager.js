module.exports = class Manager extends Employee {
    constructor(name, role, email, id, officeNumber) {
        super(name, role, email, id);
        this.template = "manager.html";
        this.officeNumber = officeNumber;
    }

    getTemplate() {
        return this.template;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};
