import * as vscode from "vscode";
import * as fs from "fs";
import { messages, simpleNodeFolderStructure, advancedFolderStructure, complexFolderStructure, showErrorMessage, showInformationMessage } from "../utils/config";

export async function createNodeAPIFolder() {
    // Select Project complexity type
    const apiComplexityLevel = await vscode.window.showQuickPick(["Simple", "Advanced", "Complex"], {
        placeHolder: "Select API complexity: Simple (basic folders), Advanced (middlewares & services), Complex (full setup)",
        canPickMany: false
    });

    // check if no selection was made
    if (!apiComplexityLevel) {
        showErrorMessage(messages.error.api_type_selection_error);
    }

    //  Create folders based on user choice
    switch (apiComplexityLevel) {
        case "Simple":
            fs.mkdirSync(`${simpleNodeFolderStructure.controller.folder}`, { recursive: true });
            fs.mkdirSync(`${simpleNodeFolderStructure.route.folder}`, { recursive: true });
            await showInformationMessage(messages.success.folder_created_success);
            break;

        case "Advanced":
            fs.mkdirSync(`${advancedFolderStructure.controller.folder}`, { recursive: true });
            fs.mkdirSync(`${advancedFolderStructure.route.folder}`, { recursive: true });
            fs.mkdirSync(`${advancedFolderStructure.middlewares.folder}`, { recursive: true });
            fs.mkdirSync(`${advancedFolderStructure.models.folder}`, { recursive: true });
            fs.mkdirSync(`${advancedFolderStructure.utils.folder}`, { recursive: true });
            fs.mkdirSync(`${advancedFolderStructure.config.folder}`, { recursive: true });
            await showInformationMessage(messages.success.folder_created_success);
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
            await showInformationMessage(messages.success.folder_created_success);
            break;

        default:
            break;
    }
}
