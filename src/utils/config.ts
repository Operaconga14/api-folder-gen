import * as path from "path";
import * as vscode from "vscode";

export const projectDirectory = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
export const workspaceFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
export const packageJsonPath = path.join(`${projectDirectory}`, "package.json");

export const extensions = {
    typescript: {
        name: "typescript",
        symbol: ".ts"
    },
    javascript: {
        name: "javascript",
        symbol: ".js"
    },
    pyhon: {
        name: "python",
        symbol: ".py"
    }
};

export const messages = {
    error: {
        installation_error: "API Folder Generator Could not be installed",
        api_type_selection_error: "API complexity needs to be selected"
    },
    success: {
        installation_success: "Congratulations, your extension API Folder Generator is now active!",
        folder_created_success: "Folders has been created successfully"
    }
};

export const simpleNodeFolderStructure = {
    controller: { folder: path.join(`${projectDirectory}`, "controllers") },
    route: { folder: path.join(`${projectDirectory}`, "routes") },
    files: { server: path.join(`${projectDirectory}`, `server`) }
};

export const advancedFolderStructure = {
    controller: { folder: path.join(`${projectDirectory}`, "controllers") },
    route: { folder: path.join(`${projectDirectory}`, "routes") },
    config: { folder: path.join(`${projectDirectory}`, "config") },
    middlewares: { folder: path.join(`${projectDirectory}`, "middlewares") },
    models: { folder: path.join(`${projectDirectory}`, "models") },
    utils: { folder: path.join(`${projectDirectory}`, "utils") },
    files: { server: path.join(`${projectDirectory}`, `server`) }
};

export const complexFolderStructure = {
    controller: { folder: path.join(`${projectDirectory}`, "controllers") },
    route: { folder: path.join(`${projectDirectory}`, "routes") },
    config: { folder: path.join(`${projectDirectory}`, "config") },
    middlewares: { folder: path.join(`${projectDirectory}`, "middlewares") },
    models: { folder: path.join(`${projectDirectory}`, "models") },
    utils: { folder: path.join(`${projectDirectory}`, "utils") },
    services: { folder: path.join(`${projectDirectory}`, "services") },
    tests: { folder: path.join(`${projectDirectory}`, "tests") },
    files: { server: path.join(`${projectDirectory}`, `server`) }
};

export const nodeAPIFramework = {
    express: {
        name: "express",
        title: "Express Js",
        command: "npm install express"
    },
    koa: {},
    restify: {},
    polka: {},
    micro: {},
    fastify: {}
};

export const pythonAPIFramework = {
    fastapi: {
        name: "fastapi",
        title: "Fast API",
        command: "pip install express"
    },
    flask: {},
    falcon: {},
    sanic: {},
    hug: {},
    bottle: {}
};

export function showErrorMessage(message: any) {
    return vscode.window.showErrorMessage(message);
}

export function showInformationMessage(message: any) {
    return vscode.window.showInformationMessage(message);
}
