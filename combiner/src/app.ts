import fs from "fs";
import {Page} from "./models/page.model";
import {Navigation} from "./models/navigation.model";

// folder defaults
let structDir = "./build/site/";
let rootDir = "./build/site";
let outputDir = "../dist";

// get configuration file
let data = fs.readFileSync(rootDir + '/pages.json', {encoding: "utf-8"});

// get navigation file
let navStr = fs.readFileSync(rootDir + '/nav.json', {encoding: "utf-8"});

//get template file
let templateFile = fs.readFileSync(rootDir + '/template/index.html', {encoding: "utf-8"});

// parse as object
let json: Page = JSON.parse(data.toString());
let nav: Navigation[] = JSON.parse(navStr.toString());

// start tree travel
createHtmlFile(json, "");

function createHtmlFile(page: Page, parent: string) {

    // replace {{content}} with the file's content
    let html = templateFile;
    console.log("Getting file " + page.file);
    html = replaceAll(html, "{{content}}", getStructureFile(page.file));
    html = replaceAll(html, "{{title}}", page.title);
    html = replaceAll(html, "{{name}}", page.name);
    html = replaceAll(html, "{{keyWords}}", page.keyWords);
    html = replaceAll(html, "{{photoUrl}}", page.photoUrl);
    html = replaceAll(html, "{{photoUrl}}", page.photoUrl);
    html = replaceAll(html, "{{nav}}", createNav(page));
    html = replaceAll(html, "{{description}}", page.description);
    html = replaceAll(html, "{{content}}", getStructureFile(page.file));

    // create output folder if it does not exist
    let folder = outputDir + "/" + parent + "/" + page.destination;
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
    // create file
    fs.writeFile(folder + "/index.html", html, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Created " + outputDir + "/" + page.destination);
    });


    parent = parent + "/" + page.destination;

    // travel deeper
    tree(page.children, parent);

}

function tree(pages: Page[], parent: string) {
    pages.forEach((page) => {
        createHtmlFile(page, parent)
    });
}

function getStructureFile(fileName: string) {
    return fs.readFileSync(structDir + fileName, {encoding: "utf-8"});
}

function replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function createNav(current: Page) {
    let out = "";
    nav.forEach((item) => {
        let active = (item.name === current.name ? "active" : "");
        out += `<li class="${active}"><a href="${item.url}">${item.title}</a></li>`
    });
    return out;
}
