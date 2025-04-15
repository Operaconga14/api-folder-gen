import * as vscode from "vscode";
import * as fs from "fs";
import {
    messages,
    extensions,
    simpleNodeFolderStructure,
    advancedFolderStructure,
    complexFolderStructure,
    showErrorMessage,
    showInformationMessage,
    nodeAPIFramework,
    framework_typescript_installation,
    workspaceFolder
} from "../utils/config";
import { createNodeFiles } from "./createNodeFiles";
import { runNodeFrameworkCommand } from "./runNodeFrameworkCommand";
import { createAndReadJsonFile } from "./createAndReadJsonFile";
import { showFrameworkDocumentation } from "./showFrameworkDocumentation";

export async function createNodeAPIFolder() {
    // Select Project complexity type
    const apiComplexityLevel = await vscode.window.showQuickPick(["Simple", "Advanced", "Complex"], {
        placeHolder: "Select API complexity: Simple (basic folders), Advanced (middlewares & services), Complex (full setup)",
        canPickMany: false
    });

    // check if no selection was made
    if (!apiComplexityLevel || apiComplexityLevel === "") {
        return showErrorMessage(messages.error.api_type_selection_error);
    }

    if (!workspaceFolder) {
        return showErrorMessage(messages.error.workspacefolder_error);
    }

    //  Create folders based on user choice
    switch (apiComplexityLevel) {
        case "Simple":
            fs.mkdirSync(`${simpleNodeFolderStructure.controller.folder}`, { recursive: true });
            fs.mkdirSync(`${simpleNodeFolderStructure.route.folder}`, { recursive: true });
            break;

        case "Advanced":
            fs.mkdirSync(`${advancedFolderStructure.controller.folder}`, { recursive: true });
            fs.mkdirSync(`${advancedFolderStructure.route.folder}`, { recursive: true });
            fs.mkdirSync(`${advancedFolderStructure.middlewares.folder}`, { recursive: true });
            fs.mkdirSync(`${advancedFolderStructure.models.folder}`, { recursive: true });
            fs.mkdirSync(`${advancedFolderStructure.utils.folder}`, { recursive: true });
            fs.mkdirSync(`${advancedFolderStructure.config.folder}`, { recursive: true });
            break;

        case "Complex":
            fs.mkdirSync(`${complexFolderStructure.controller.folder}`, { recursive: true });
            fs.mkdirSync(`${complexFolderStructure.route.folder}`, { recursive: true });
            fs.mkdirSync(`${complexFolderStructure.middlewares.folder}`, { recursive: true });
            fs.mkdirSync(`${complexFolderStructure.models.folder}`, { recursive: true });
            fs.mkdirSync(`${complexFolderStructure.utils.folder}`, { recursive: true });
            fs.mkdirSync(`${complexFolderStructure.config.folder}`, { recursive: true });
            fs.mkdirSync(`${complexFolderStructure.tests.folder}`, { recursive: true });
            fs.mkdirSync(`${complexFolderStructure.services.folder}`, { recursive: true });
            break;

        default:
            break;
    }

    showInformationMessage(messages.success.folder_creation_success);

    // create necessary files
    const extensionType = await vscode.window.showQuickPick([extensions.javascript.name, extensions.typescript.name], {
        placeHolder: "Select extension type",
        canPickMany: false
    });

    if (!extensionType || extensionType === "") {
        return showErrorMessage(messages.error.extensions_type_error);
    }

    await createNodeFiles(extensionType);

    // create and install framework library and create package manager file package.json
    const frameworkSelection = await vscode.window.showQuickPick(
        [nodeAPIFramework.express.title, nodeAPIFramework.fastify.title, nodeAPIFramework.koa.title, nodeAPIFramework.micro.title, nodeAPIFramework.polka.title, nodeAPIFramework.restify.title],
        {
            placeHolder: "Choose your Framework e.g ExpressJs etc",
            canPickMany: false
        }
    );

    if (!frameworkSelection) {
        return showErrorMessage(messages.error.framework_selection_error);
    }

    if (extensionType === extensions.javascript.name && frameworkSelection) {
        await createAndReadJsonFile(extensionType);
        runNodeFrameworkCommand(frameworkSelection.toLocaleLowerCase());
        return await showFrameworkDocumentation(frameworkSelection);
    }

    if (extensionType === extensions.typescript.name && frameworkSelection) {
        await createAndReadJsonFile(extensionType);
        runNodeFrameworkCommand(`${frameworkSelection.toLocaleLowerCase()} ${framework_typescript_installation}${frameworkSelection.toLocaleLowerCase()}`);
        return await showFrameworkDocumentation(frameworkSelection);
    }
}
