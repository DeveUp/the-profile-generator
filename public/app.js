const Controller = require('../src/controller/Controller.js');
const File = require('../src/util/File');


const controller = new Controller();
const file = new File();

(async () => {
    const employees = await controller.renderQuestions();
    const renderedEmployees = controller.renderEmployees(employees);
    const mainPage = controller.renderMainPage(renderedEmployees);
    await file.writeToFileAsync("profile.html", mainPage);
})();
