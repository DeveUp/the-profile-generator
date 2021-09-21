const fs = require("fs").promises;
const path = require("path");

const Print = require("./Print");

class File {

    constructor(){
        this.print = new Print();
        this.templatesDir = path.resolve(__dirname, "../../public");
    }

    async writeToFileAsync(fileName, data) {
        return await fs.writeFile(
            path.resolve(this.templatesDir, fileName),
            data,
            (err) => {
                if (err) {
                    this.print.err(err);
                }
                this.print.success(
                    `Success! Your ${fileName} file has been generated`
                );
            }
        );
    }
};

module.exports= File;
