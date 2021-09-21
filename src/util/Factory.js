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

export default Factory;