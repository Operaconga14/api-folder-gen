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

// src/resources/files/server.ts
var javascript = `/**This is Javacript Server File Example*/
        const express = require('express');

        const app = express();
        const PORT = 3000;

        // Middleware configuration here.

        app.get('/', (req, res) => {
        res.status(200).json({message: 'My Api'})
        })


        app.listen(PORT, () => {
        // change the 3000 to your desired Port number or configuration
        console.log('listening to 3000 url: http://localhost:3000')
        })
        `;
var typescript = `/**This is Typescript Server File Example*/
        import express, {Request, Response} from 'express';

        const app = express();
        const PORT = 3000;

        // Middleware configuration here.


        app.get('/', (req: Request, res: Response) => {
                res.status(200).json({ message: 'My Api' });
        });



         app.listen(PORT, () => {
        // change the 3000 to your desired Port number or configuration
        console.log('listening to 3000 url: http://localhost:3000')
        })
        `;

// src/extension.ts
var projectDirectory = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
var workspaceFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
var packageJsonPath = path.join(`${projectDirectory}`, "package.json");
var extensions = {
  typescript: ".ts",
  javascript: ".js"
};
var simpleFolderStructure = {
  controller: {
    folder: path.join(`${projectDirectory}`, "controllers")
  },
  route: {
    folder: path.join(`${projectDirectory}`, "routes")
  },
  // Files needed int the Api
  files: {
    server: path.join(`${projectDirectory}`, `server`)
  }
};
var advanceFolderStructure = {
  controller: {
    folder: path.join(`${projectDirectory}`, "controllers")
  },
  route: {
    folder: path.join(`${projectDirectory}`, "routes")
  },
  config: {
    folder: path.join(`${projectDirectory}`, "config")
  },
  middlewares: {
    folder: path.join(`${projectDirectory}`, "middlewares")
  },
  models: {
    folder: path.join(`${projectDirectory}`, "models")
  },
  utils: {
    folder: path.join(`${projectDirectory}`, "utils")
  },
  // Files needed int the Api
  files: {
    server: path.join(`${projectDirectory}`, `server`)
  }
};
var complexFolderStructure = {
  controller: {
    folder: path.join(`${projectDirectory}`, "controllers")
  },
  route: {
    folder: path.join(`${projectDirectory}`, "routes")
  },
  config: {
    folder: path.join(`${projectDirectory}`, "config")
  },
  middlewares: {
    folder: path.join(`${projectDirectory}`, "middlewares")
  },
  models: {
    folder: path.join(`${projectDirectory}`, "models")
  },
  utils: {
    folder: path.join(`${projectDirectory}`, "utils")
  },
  services: {
    folder: path.join(`${projectDirectory}`, "services")
  },
  tests: {
    folder: path.join(`${projectDirectory}`, "tests")
  },
  // Files needed int the Api
  files: {
    server: path.join(`${projectDirectory}`, `server`)
  }
};
async function createApiFolders(apiType) {
  if (!projectDirectory) {
    vscode.window.showErrorMessage("No Workspace folder is Open");
    return;
  }
  switch (apiType) {
    case "Simple":
      fs.mkdirSync(`${simpleFolderStructure.route.folder}`, { recursive: true });
      fs.mkdirSync(`${simpleFolderStructure.controller.folder}`, { recursive: true });
      break;
    case "Advance":
      fs.mkdirSync(`${advanceFolderStructure.route.folder}`, { recursive: true });
      fs.mkdirSync(`${advanceFolderStructure.controller.folder}`, { recursive: true });
      fs.mkdirSync(`${advanceFolderStructure.config.folder}`, { recursive: true });
      fs.mkdirSync(`${advanceFolderStructure.middlewares.folder}`, { recursive: true });
      fs.mkdirSync(`${advanceFolderStructure.models.folder}`, { recursive: true });
      fs.mkdirSync(`${advanceFolderStructure.utils.folder}`, { recursive: true });
      break;
    case "Complex":
      fs.mkdirSync(`${complexFolderStructure.route.folder}`, { recursive: true });
      fs.mkdirSync(`${complexFolderStructure.controller.folder}`, { recursive: true });
      fs.mkdirSync(`${complexFolderStructure.config.folder}`, { recursive: true });
      fs.mkdirSync(`${complexFolderStructure.middlewares.folder}`, { recursive: true });
      fs.mkdirSync(`${complexFolderStructure.models.folder}`, { recursive: true });
      fs.mkdirSync(`${complexFolderStructure.utils.folder}`, { recursive: true });
      fs.mkdirSync(`${complexFolderStructure.services.folder}`, { recursive: true });
      fs.mkdirSync(`${complexFolderStructure.tests.folder}`, { recursive: true });
      break;
    default:
      break;
  }
}
async function createFiles(apiType, extensionType) {
  switch (apiType) {
    case "Simple":
      switch (extensionType) {
        case "Javascript":
          fs.writeFileSync(`${simpleFolderStructure.files.server}${extensions.javascript}`, javascript, { flag: "a" });
          break;
        case "Typescript":
          fs.writeFileSync(`${simpleFolderStructure.files.server}${extensions.typescript}`, typescript, { flag: "a" });
          break;
        default:
          break;
      }
      break;
    case "Advance":
      switch (extensionType) {
        case "Javascript":
          fs.writeFileSync(`${advanceFolderStructure.files.server}${extensions.javascript}`, javascript, { flag: "a" });
          break;
        case "Typescript":
          fs.writeFileSync(`${advanceFolderStructure.files.server}${extensions.typescript}`, typescript, { flag: "a" });
          break;
        default:
          break;
      }
      break;
    case "Complex":
      switch (extensionType) {
        case "Javascript":
          fs.writeFileSync(`${complexFolderStructure.files.server}${extensions.javascript}`, javascript, { flag: "a" });
          break;
        case "Typescript":
          fs.writeFileSync(`${complexFolderStructure.files.server}${extensions.typescript}`, typescript, { flag: "a" });
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
}
async function runNpmCommands(command, option) {
  if (!workspaceFolder) {
    vscode.window.showErrorMessage("No workspace folder is open.");
    return;
  }
  if (option == "Yes") {
    return new Promise((resolve, reject) => {
      (0, import_child_process.exec)(`npm ${command}`, { cwd: workspaceFolder }, (error, stdout, stderr) => {
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
  } else {
    console.log("You can Create the npm package just by running npm init or npm init -y and to install node package use npm install 0r i");
    vscode.window.showInformationMessage("You can Create the npm package just by running npm init or npm init -y and to install node package use npm install 0r i");
  }
}
async function updateJsonFile() {
  fs.readFile(packageJsonPath, "utf-8", (err, data) => {
    if (err) {
      vscode.window.showErrorMessage(`${err}`);
      return;
    }
    const packageJson = JSON.parse(data);
    packageJson.description = `${packageJson.name}`;
    packageJson.scripts = {
      start: "node server.js",
      dev: "nodemon server.js"
    };
    fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), (err2) => {
      if (err2) {
        vscode.window.showErrorMessage(`${err2}`);
        return;
      }
      vscode.window.showInformationMessage("package.json File updateted successfully");
    });
  });
}
function activate(context) {
  console.log('Congratulations, your extension "api-folder-gen" is now active!');
  const generateApi = vscode.commands.registerCommand("api-folder-gen.generateApi", async () => {
    const apiType = await vscode.window.showQuickPick(
      ["Simple", "Advance", "Complex"],
      {
        placeHolder: "Select How Complex your Api should be created",
        canPickMany: false
      }
    );
    if (!apiType) {
      vscode.window.showErrorMessage("An API complexity needs to be selected");
      return;
    }
    await createApiFolders(apiType);
    const preferredExtension = await vscode.window.showQuickPick(
      ["Javascript", "Typescript"],
      {
        placeHolder: "Choose your preferred Extension",
        canPickMany: false
      }
    );
    if (!preferredExtension) {
      vscode.window.showErrorMessage("Preferred Extension needs to be selected");
      return;
    }
    await createFiles(apiType, preferredExtension);
    const packageJsonFile = await vscode.window.showQuickPick(
      ["Yes", "No"],
      {
        placeHolder: "Do you want to create package.json file automatically or manually?\nNB: If created automatically you can later edit it to your satisfaction",
        canPickMany: false
      }
    );
    if (!packageJsonFile) {
      vscode.window.showInformationMessage("One Option needs to be selected");
      return;
    }
    await runNpmCommands(`init -y`, packageJsonFile);
    await updateJsonFile();
    const npmPackages = await vscode.window.showQuickPick(
      ["Yes", "No"],
      {
        placeHolder: "Do you want to install the important npm Packages",
        canPickMany: false
      }
    );
    if (!npmPackages) {
      vscode.window.showInformationMessage("One Option needs to be selected");
      return;
    }
    await runNpmCommands(`install express`, npmPackages);
  });
  context.subscriptions.push(generateApi);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
