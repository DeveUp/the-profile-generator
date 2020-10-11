//Utils
const Filter = require("../utils/Filter");
const filter = new Filter();

//View
const Print = require("../view/Print");
const print = new Print();

//Model
const Questions = require("../model/Questions");
const questions = new Questions();

module.exports = class Controller {
    renderQuestions() {
        const employees = [];
        try {
            print
                .questions([
                    questions.addMember(),
                    questions.selectMember(),
                    questions.selectMemberId(),
                    questions.enterMemberEmail(),
                ])
                .then(({ name, role, id, email }) => {
                    switch (name) {
                        case "Engineer":
                            break;
                        case "Intern":
                            break;
                        case "Manager":
                            break;
                    }
                    console.log(name, role, id, email);
                });
        } catch (err) {
            print.errStack(err);
        }

        return employees;
    }

    renderEmployees(employees) {
        const html = [];
        if (employees && employees instanceof Employee) {
            html.push(filter.getFiltered(employees, Engineer));
            html.push(filter.getFiltered(employees, Manager));
            html.push(filter.getFiltered(employees, Intern));
        }

        return renderMain(html.join(""));
    }
};
