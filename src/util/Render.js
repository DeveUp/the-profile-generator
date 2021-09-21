const fs = require("fs");
const path = require("path");

class Render {
    
    constructor(){
    }

    replacePlaceholders(template, placeholder, value) {
        console.log(placeholder, value);
        const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
        return template.replace(pattern, value);
    }

    renderTemplate(templatesDir, template) {
        return fs.readFileSync(path.resolve(templatesDir, template), "utf8");
    }
};

module.exports = Render;