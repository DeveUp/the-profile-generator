/**
 * @description - Representa la información de los empleados.
 * @version - 1.0.0.
 */
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
        this.role = this.role ?? "Employee";
        return this.role;
    }

    setRole(role) {
        this.role = role;
    }
};

export default Employee;
