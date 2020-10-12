const Controller = require("./controller/Controller");

const controller = new Controller();

(async () => {
    const employees = await controller.renderQuestions();
    const renderedEmployees = controller.renderEmployees(employees);
    const mainPage = controller.renderMainPage(renderedEmployees);
    console.log(renderedEmployees);
})();
