import fs from "fs";
import {Page} from "./models/page.model";

let structDir = "./build/site/";
let rootDir = "./build/site";
let outputDir = "../dist";

let data = fs.readFileSync(rootDir + '/pages.json', {encoding: "utf-8"});

let json = JSON.parse(data.toString());

let attributes = ["title", "description"];

createHtmlFile(json);

if (!fs.existsSync(outputDir)) {
    console.log("Created Dist Folder");
    fs.mkdirSync(outputDir);
}

function createHtmlFile(page: Page) {
    console.log(page.name);
    tree(page.children);
    let html = getTemplateFile().replace("{{content}}", getStructureFile(page.file));

    // todo
    attributes.forEach((item) => {
        //html = html.replace("{{" + item + "}}", page.item)
    });

    let folder = outputDir + "/" + page.destination;
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
    fs.writeFile(folder + "/index.html", html, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Created " + outputDir + page.destination);
    });
}

function tree(pages: Page[]) {
    pages.forEach((page) => {
        createHtmlFile(page)
    });
}

function getTemplateFile() {
    return fs.readFileSync(rootDir + '/template/index.html', {encoding: "utf-8"});
}

function getStructureFile(fileName: string) {
    return fs.readFileSync(structDir + fileName, {encoding: "utf-8"});
}
