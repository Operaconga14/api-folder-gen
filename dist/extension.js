"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var import_child_process = require("child_process");
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var vscode = __toESM(require("vscode"));
async function createApiFolder(apiType) {
  const projectDirectory = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  vscode.window.showInformationMessage(apiType.toLowerCase());
  if (!projectDirectory) {
    vscode.window.showErrorMessage("No Workspace folder is Open");
    return;
  }
  switch (apiType) {
    case "Simple Api":
      const simplecontrollersPath = path.join(projectDirectory, "controllers");
      const simpleroutesPath = path.join(projectDirectory, "routes");
      fs.mkdirSync(simplecontrollersPath, { recursive: true });
      fs.mkdirSync(simpleroutesPath, { recursive: true });
      await runNpmCommands("init -y", projectDirectory);
      await runNpmCommands("i express", projectDirectory);
      break;
    case "Advanced Api":
      const advancecontrollersPath = path.join(projectDirectory, "controllers");
      const advanceroutesPath = path.join(projectDirectory, "routes");
      const advanceconfigPath = path.join(projectDirectory, "config");
      const advancemiddlewaresPath = path.join(projectDirectory, "middlewares");
      const advancemodelsPath = path.join(projectDirectory, "models");
      const advanceutilsPath = path.join(projectDirectory, "utils");
      fs.mkdirSync(advancecontrollersPath, { recursive: true });
      fs.mkdirSync(advanceroutesPath, { recursive: true });
      fs.mkdirSync(advanceconfigPath, { recursive: true });
      fs.mkdirSync(advancemiddlewaresPath, { recursive: true });
      fs.mkdirSync(advancemodelsPath, { recursive: true });
      fs.mkdirSync(advanceutilsPath, { recursive: true });
      await runNpmCommands("init -y", projectDirectory);
      await runNpmCommands("i express", projectDirectory);
      break;
    case "Complex Api":
      const complexcontrollersPath = path.join(projectDirectory, "controllers");
      const complexroutesPath = path.join(projectDirectory, "routes");
      const complexconfigPath = path.join(projectDirectory, "config");
      const complexmiddlewaresPath = path.join(projectDirectory, "middlewares");
      const complexmodelsPath = path.join(projectDirectory, "models");
      const complexutilsPath = path.join(projectDirectory, "utils");
      const complexservicesPath = path.join(projectDirectory, "services");
      const complextestsPath = path.join(projectDirectory, "tests");
      fs.mkdirSync(complexcontrollersPath, { recursive: true });
      fs.mkdirSync(complexroutesPath, { recursive: true });
      fs.mkdirSync(complexconfigPath, { recursive: true });
      fs.mkdirSync(complexmiddlewaresPath, { recursive: true });
      fs.mkdirSync(complexmodelsPath, { recursive: true });
      fs.mkdirSync(complexutilsPath, { recursive: true });
      fs.mkdirSync(complexservicesPath, { recursive: true });
      fs.mkdirSync(complextestsPath, { recursive: true });
      await runNpmCommands("init -y", projectDirectory);
      await runNpmCommands("install express", projectDirectory);
      break;
    default:
      break;
  }
}
async function runNpmCommands(command, workingDirectory) {
  return new Promise((resolve, reject) => {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
      vscode.window.showErrorMessage("No workspace folder is open.");
      return;
    }
    const projectPath = workspaceFolder.uri.fsPath;
    (0, import_child_process.exec)(`npm ${command}`, { cwd: projectPath }, (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Error running npm command: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        vscode.window.showWarningMessage(`npm warning: ${stderr}`);
      }
      vscode.window.showInformationMessage(`npm command executed successfully:
${stdout}`);
      resolve();
    });
  });
}
function activate(context) {
  console.log('Congratulations, your extension "api-folder-gen" is now active!');
  const generateFolder = vscode.commands.registerCommand("api-folder-gen.generateFolder", async () => {
    const apiType = await vscode.window.showQuickPick(
      ["Simple Api", "Advanced Api", "Complex Api"],
      {
        placeHolder: "Select the type of Api folder structure you want to create",
        canPickMany: false
      }
    );
    if (!apiType) {
      vscode.window.showErrorMessage("An API Type needs to be selected");
      return;
    }
    await createApiFolder(apiType);
  });
  context.subscriptions.push(generateFolder);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
