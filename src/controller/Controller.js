const path = require("path");
const Render = require("../util/Render");
const Print = require("../util/Print");
const Questions = require("../model/Questions");

const Employee = require("../model/Employee");
const Engineer = require("../model/Engineer");
const Intern = require("../model/Intern");
const Manager = require("../model/Manager");

class Controller {

    constructor(){
        this.templatesDir = path.resolve(__dirname, "../view");
        this.render = new Render();
        this.print = new Print();
        this.questions = new Questions();
    }

    async renderQuestions() {
        const employees = [];
        let newMember;
        do {
            newMember = await this.addMember();
            employees.push(newMember);
            newMember = await this.print.questions([this.questions.moreMembers()]);
        } while (newMember.moreMembers === "yes");
        return employees;
    }

    async addMember() {
        try {
            const { name, id, email, role, image } = await this.print.questions([
                this.questions.addMember(),
                this.questions.selectMember(),
                this.questions.selectMemberId(),
                this.questions.enterMemberEmail(),
                this.questions.selectImage(),
            ]);
            return this.getEmployeesFactory(name, id, email, role, image);
        } catch (err) {
            this.print.errStack(err);
        }
    }

    renderEmployees(employees) {
        const html = [];
        employees.forEach((employee) => {
            if (employee && employee instanceof Employee) {
                if (!employee["template"]) return;
                let template = this.render.renderTemplate(
                    this.templatesDir,
                    employee["template"]
                );
                for (let key in employee) {
                    if (key === "template") continue;
                    template = this.render.replacePlaceholders(
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
        const template = this.render.renderTemplate(this.templatesDir, "main.html");
        return this.render.replacePlaceholders(template, "team", html);
    }

    async getEmployeesFactory(name, id, email, role, image) {
        let member;
        let answer;
        try {
            switch (role) {
                case "Engineer":
                    answer = await this.print.questions([this.questions.engineer()]);
                    member = new Engineer(
                        name,
                        id,
                        email,
                        image,
                        answer.gitHubUserName
                    );
                    break;
                case "Intern":
                    answer = await this.print.questions([this.questions.intern()]);
                    member = new Intern(
                        name, 
                        id, 
                        email, 
                        image,
                        answer.schoolName
                    );
                    break;
                case "Manager":
                    answer = await this.print.questions([this.questions.manager()]);
                    member = new Manager(
                        name,
                        id,
                        email,
                        image,
                        answer.officePhoneNumber
                    );
                    break;
            }
        } catch (err) {
            this.print.errStack(err);
        }

        return member;
    }
};

module.exports= Controller;