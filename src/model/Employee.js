/**
 * @description - Representa la información de los empleados.
 * @version - 1.0.0.
 */
class Employee {

    constructor(name, id, email, role = "Employee", template = null) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.template = template;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getRole() {
        return this.role;
    }

    setRole(role) {
        this.role = role;
    }

    getTemplate() {
        return this.template;
    }

    setTemplate(template) {
        this.template = template;
    }
};

module.exports= Employee;
