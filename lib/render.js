const path = require("path");
const fs = require("fs");
const TEMP_DIR = path.resolve(__dirname, "../templates")
// const OUT_DIR = path.resolve(__dirname, "../")


const buildSite = index => {
    const codex = fs.readFileSync(path.resolve(TEMP_DIR, "main.html"), "utf8");
    return replace(codex, "team", index)
}
const replace = (template, intrum, value) => {
    // console.log(value);
    const codex = new RegExp("{{ " + intrum + " }}", "gm");
    return template.replace(codex, value);
}
const render = employees => {
    var boss=[];
    boss.push(...employees.filter(
            employee => employee.getRole() === "Manager"
        ).map(
            manager => buildEmployee(manager)
        ));
    // console.log("Boss first push:\n", boss)
    boss.push(...employees.filter(
            employee => employee.getRole() === "Engineer"
        ).map(
            engineer => buildEmployee(engineer)
        ));
    boss.push(...employees.filter(
            employee => employee.getRole() === "Intern"
        ).map(
            intern => buildEmployee(intern)
        ));
    // console.log("Boss join data test\n",boss.join(""));
    return buildSite(boss.join(""));
}
const buildEmployee = employee => {
    // console.log("BuildEmployee:\n", employee);
    let codex = fs.readFileSync(path.resolve(TEMP_DIR, "generic.html"), "utf8");
    codex = replace(codex, "Name", employee.getName());
    codex = replace(codex, "id", employee.getId());
    codex = replace(codex, "email", employee.getEmail());
    codex = replace(codex, "title", employee.getRole());
    codex = replace(codex, "unique", employee.getUnique());
    codex = replace(codex, "uniqueID", employee.getUniqueID());
    codex = replace(codex, "svg", employee.getSVG());
    return codex;
}
module.exports = render