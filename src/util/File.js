const fs = require("fs").promises;
const path = require("path");
const Print = require("../../view/Print");

const print = new Print();

const templatesDir = path.resolve(__dirname, "../out");

class File {
    async writeToFileAsync(fileName, data) {
        return await fs.writeFile(
            path.resolve(templatesDir, fileName),
            data,
            (err) => {
                if (err) {
                    print.err(err);
                }

                print.success(
                    `Success! Your ${fileName} file has been generated`
                );
            }
        );
    }
};

export default File;
