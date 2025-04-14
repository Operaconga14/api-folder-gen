import * as path from "path";
import * as vscode from "vscode";

export const projectDirectory = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
export const workspaceFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
export const packageJsonPath = path.join(`${projectDirectory}`, "package.json");

export const extensions = {
    typescript: ".ts",
    javascript: ".js",
    python: ".py"
};
