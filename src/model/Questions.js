const fs = require("fs");
const path = require("path");

//View
const Print = require("../view/Print");
const print = new Print();

const questionsFile = path.resolve(__dirname, "questions.json");
const questions = fs.readFileSync(questionsFile);
const questionsJson = JSON.parse(questions);

module.exports = class Questions {
    addMember() {
        const member = questionsJson.addMember;
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
        return questionsJson.selectMember;
    }

    selectMemberId() {
        return questionsJson.selectMemberId;
    }

    enterMemberEmail() {
        const email = questionsJson.enterMemberEmail;
        email.validate = "validate";
        email["validate"] = (answer) => {
            if (answer.length < 1 || !answer.includes("@"))
                return print.errMsg("A valid email address is required.");
            return true;
        };
        return questionsJson.enterMemberEmail;
    }

    manager() {
        return questionsJson.manager;
    }

    engineer() {
        return questionsJson.engineer;
    }

    intern() {
        return questionsJson.intern;
    }

    moreMembers() {
        return questionsJson.moreMembers;
    }
};
