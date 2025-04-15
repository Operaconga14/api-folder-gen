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
        api_type_selection_error: "API complexity needs to be selected",
        folder_creation_error: "Folder creation failed",
        extensions_type_error: "Extension type needs to be selected",
        file_creation_error: "File creation failed",
        workspacefolder_error: "No workspace folder found. Please open a workspace folder.",
        npm_error: "Error running npm command:",
        npm_stderror_error: "npm warning:",
        framework_selection_error: "Framework needs to be selected because you selected Yes",
        framework_not_found_error: "Framework not found."
    },
    success: {
        installation_success: "Congratulations, your extension API Folder Generator is now active!",
        folder_creation_success: "Folders has been created successfully",
        files_creation_success: "Files has been created successfully",
        framework_installation_success: "Framework has been installed successfully",
        npm_success: "npm command ran successfully and package installed",
        stdout_success: "npm command executed successfully:",
        package_json_success: "package.json File updated successfully"
    },
    other: {
        framework_documentation_url: "Documentation URL"
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

export const framework_typescript_installation = "@types/";

export const nodeAPIFramework = {
    express: {
        name: "express",
        title: "Express",
        command: "npm install express",
        swaggercommand: "swagger-ui-express",
        typescriptcommand: "express @types/express",
        documentationsite: "https://expressjs.com/"
    },
    koa: {
        name: "koa",
        title: "Koa",
        command: "npm install koa",
        swaggercommand: "swagger-ui-express",
        typescriptcommand: "koa @types/koa",
        documentationsite: "https://koajs.com/"
    },
    restify: {
        name: "restify",
        title: "Restify",
        command: "npm install restify",
        swaggercommand: "swagger-ui-express",
        typescriptcommand: "restify @types/restify",
        documentationsite: "http://restify.com/"
    },
    polka: {
        name: "polka",
        title: "Polka",
        command: "npm install polka",
        swaggercommand: "swagger-ui-express",
        typescriptcommand: "polka @types/polka",
        documentationsite: "https://github.com/lukeed/polka#readme"
    },
    micro: {
        name: "micro",
        title: "Micro",
        command: "npm install micro",
        swaggercommand: "swagger-ui-express",
        typescriptcommand: "micro @types/micro",
        documentationsite: "https://github.com/vercel/micro#readme"
    },
    fastify: {
        name: "fastify",
        title: "Fastify",
        command: "npm install fastify",
        swaggercommand: "swagger-ui-express",
        typescriptcommand: "fastify @types/fastify",
        documentationsite: "https://www.fastify.io/"
    }
};

export const pythonAPIFramework = {
    fastapi: {
        name: "fastapi",
        title: "FastAPI",
        command: "pip install fastapi",
        documentationsite: "https://fastapi.tiangolo.com/"
    },
    flask: {
        name: "flask",
        title: "Flask",
        command: "flask",
        documentationsite: "https://flask.palletsprojects.com/"
    },
    falcon: {
        name: "falcon",
        title: "Falcon",
        command: "falcon",
        documentationsite: "https://falcon.readthedocs.io/en/stable/"
    },
    sanic: {
        name: "sanic",
        title: "Sanic",
        command: "sanic",
        documentationsite: "https://sanic.dev/en/"
    },
    hug: {
        name: "hug",
        title: "Hug",
        command: "hug",
        documentationsite: "https://hugapi.github.io/hug/"
    },
    bottle: {
        name: "bottle",
        title: "Bottle",
        command: "bottle",
        documentationsite: "https://bottlepy.org/docs/dev/"
    }
};

export function showErrorMessage(message: any) {
    return vscode.window.showErrorMessage(message);
}

export function showInformationMessage(message: any) {
    return vscode.window.showInformationMessage(message);
}

export function showClickableInformationMessage(title: string, documentation: string) {
    return vscode.window.showInformationMessage(`Click below to view ${title} documentation`, "Open Documentation").then((selection) => {
        if (selection === "Open Documentation") {
            vscode.env.openExternal(vscode.Uri.parse(documentation));
        }
    });
}

export const messageToFile = {
    javascript: {
        comments: `/**
 * @fileoverview This is a sample server file for the API Folder Generator extension.
 * @author Your Name
 * @version 1.0.0
 * @description This file serves as the entry point for the server.
 * @license MIT
 */`
    },
    typescript: {
        comments: `/**
 * @fileoverview This is a sample server file for the API Folder Generator extension.
 * @author Your Name
 * @version 1.0.0
 * @description This file serves as the entry point for the server.
 * @license MIT
 * @typescript
 */`
    }
};
