const path = require("path");
const Render = require("../util/Render");
const Print = require("../util/Print");
const Questions = require("../model/Questions");

const templatesDir = path.resolve(__dirname, "../view");

//Utils

const render = new Render();

//View

const print = new Print();

//Model

const questions = new Questions();

const Employee = require("../model/Employee");
const Engineer = require("../model/Engineer");
const Intern = require("../model/Intern");
const Manager = require("../model/Manager");

class Controller {
    async renderQuestions() {
        const employees = [];
        let newMember;
        do {
            newMember = await this.addMember();
            employees.push(newMember);
            newMember = await print.questions([questions.moreMembers()]);
        } while (newMember.moreMembers === "yes");
        return employees;
    }

    async addMember() {
        try {
            const { name, id, email, role } = await print.questions([
                questions.addMember(),
                questions.selectMember(),
                questions.selectMemberId(),
                questions.enterMemberEmail(),
            ]);

            const factory = new Factory();
            return factory.getEmployeesFactory(name, id, email, role);
        } catch (err) {
            print.errStack(err);
        }
    }

    renderEmployees(employees) {
        const html = [];
        employees.forEach((employee) => {
            if (employee && employee instanceof Employee) {
                if (!employee["template"]) return;
                let template = render.renderTemplate(
                    templatesDir,
                    employee["template"]
                );
                for (let key in employee) {
                    if (key === "template") continue;
                    template = render.replacePlaceholders(
                        template,
                        key,
                        employee[key]
                    );
                }
                html.push(template);
            }
        });
        return html.join("");
    }

    renderMainPage(html) {
        const template = render.renderTemplate(templatesDir, "main.html");
        return render.replacePlaceholders(template, "team", html);
    }
};

module.exports= Controller;