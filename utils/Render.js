module.exports = class Render {
    replacePlaceholders(template, placeholder, value) {
        const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
        return template.replace(pattern, value);
    }

    renderTemplate(templatesDir, template, className) {
        const template = fs.readFileSync(
            path.resolve(templatesDir, template),
            "utf8"
        );
    }
};
