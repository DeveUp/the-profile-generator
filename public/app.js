const Controller = require("./controller/Controller");
const controller = new Controller();

const File = require("./utils/File");
const file = new File();

(async () => {
    const employees = await controller.renderQuestions();
    const renderedEmployees = controller.renderEmployees(employees);
    const mainPage = controller.renderMainPage(renderedEmployees);
    await file.writeToFileAsync("TeamProfile.html", mainPage);
})();
