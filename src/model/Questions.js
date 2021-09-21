const fs = require("fs");
const path = require("path");

const Print = require('../util/Print.js');

class Questions {

    constructor(){
        this.print = new Print();
        this.JSON = this.json();
    }

    json(){
        const questionsFile = path.resolve(__dirname, "../../public/json/question.json");
        const questions = fs.readFileSync(questionsFile);
        return JSON.parse(questions);
    }

    addMember() {
        const member = this.JSON.addMember;
        member.validate = "validate";
        member["validate"] = (answer) => {
            if (answer.length <= 1) {
                return print.errMsg("A valid member name is required.");
            }
            return true;
        };
        return member;
    }

    selectMember() {
        return this.JSON.selectMember;
    }

    selectMemberId() {
        return this.JSON.selectMemberId;
    }

    enterMemberEmail() {
        const email = this.JSON.enterMemberEmail;
        email.validate = "validate";
        email["validate"] = (answer) => {
            if (answer.length < 1 || !answer.includes("@"))
                return print.errMsg("A valid email address is required.");
            return true;
        };
        return this.JSON.enterMemberEmail;
    }

    manager() {
        return this.JSON.manager;
    }

    engineer() {
        return this.JSON.engineer;
    }

    intern() {
        return this.JSON.intern;
    }

    moreMembers() {
        return this.JSON.moreMembers;
    }
};

module.exports= Questions;
