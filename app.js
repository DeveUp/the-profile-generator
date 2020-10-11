const Controller = require("./controller/Controller");

const controller = new Controller();

(async () => {
    const employees = controller.renderQuestions();
    controller.renderEmployees(employees);
})();
