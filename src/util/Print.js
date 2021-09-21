const chalk = require("chalk");
const inquirer = require("inquirer");

class Print {

    constructor() {
        this.errorStyle = chalk.bold.red;
        this.successStyle = chalk.bold.green;
        this.infoStyle = chalk.bold.blue;
    }

    errMsg(msg) {
        console.log(this.errorStyle(msg));
    }

    errStack(msg) {
        console.log(this.errorStyle(msg.stack));
    }

    success(msg) {
        console.log(this.successStyle(msg));
    }

    info(msg) {
        console.log(this.infoStyle(msg));
    }

    async questions(questions) {
        return await inquirer.prompt(questions);
    }
};

module.exports = Print;
