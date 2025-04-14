import { messages, createNodeAPIFolder, createPythonAPIFolder, createAPIFolderWithAI } from "./index";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage(messages.success.installation_success);

    // Function to generate node js api folder
    const generateNodeAPI = vscode.commands.registerCommand("api-folder-gen.generateNodeAPI", createNodeAPIFolder);

    // Function to generate Python API folder
    const generatePythonAPI = vscode.commands.registerCommand("api-folder-gen.generatePythonAPI", createPythonAPIFolder);

    // Function to generate API folder With AI
    const generateAPIWithAI = vscode.commands.registerCommand("api-folder-gen.generateAPIWithAI", createAPIFolderWithAI);

    // add Command to context
    context.subscriptions.push(generateNodeAPI);
    context.subscriptions.push(generatePythonAPI);
    context.subscriptions.push(generateAPIWithAI);
}

export function deactivate() {}
