const path = require("path");
const templatesDir = path.resolve(__dirname, "../view");

//Utils
const Render = require("../utils/Render");
const render = new Render();

//View
const Print = require("../view/Print");
const print = new Print();

//Model
const Questions = require("../model/Questions");
const questions = new Questions();

const Employee = require("../model/Employee");
const Engineer = require("../model/Engineer");
const Intern = require("../model/Intern");
const Manager = require("../model/Manager");

module.exports = class Controller {
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

class Factory {
    async getEmployeesFactory(name, id, email, role) {
        let member;
        let answer;
        try {
            switch (role) {
                case "Engineer":
                    answer = await print.questions([questions.engineer()]);
                    member = new Engineer(
                        name,
                        id,
                        email,
                        answer.gitHubUserName
                    );
                    break;
                case "Intern":
                    answer = await print.questions([questions.intern()]);
                    member = new Intern(name, id, email, answer.schoolName);
                    break;
                case "Manager":
                    answer = await print.questions([questions.manager()]);
                    member = new Manager(
                        name,
                        id,
                        email,
                        answer.officePhoneNumber
                    );
                    break;
            }
        } catch (err) {
            print.errStack(err);
        }

        return member;
    }
}
