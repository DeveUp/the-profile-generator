module.exports = class Filter {
    getFiltered(employees = {}, className, callback) {
        return employees
            .filter((employee) => employee.getRole() instanceof className)
            .map((person) => callback(person));
    }
};
