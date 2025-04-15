import { exec } from "child_process";
import { messages, nodeAPIFramework, showErrorMessage, showInformationMessage } from "../utils/config";
import { workspaceFolder } from "../utils/config";
import { runNodeFrameworkCommand } from "./runNodeFrameworkCommand";

export async function runNodeCommand(framework: string) {
    if (!workspaceFolder) {
        showErrorMessage(messages.error.workspacefolder_error);
        return;
    }
    switch (framework) {
        case nodeAPIFramework.express.name:
            runNodeFrameworkCommand(nodeAPIFramework.express.command);
            break;
        case nodeAPIFramework.koa.name:
            runNodeFrameworkCommand(nodeAPIFramework.koa.command);
            break;
        case nodeAPIFramework.micro.name:
            runNodeFrameworkCommand(nodeAPIFramework.micro.command);
            break;
        case nodeAPIFramework.fastify.name:
            runNodeFrameworkCommand(nodeAPIFramework.fastify.command);
            break;
        case nodeAPIFramework.polka.name:
            runNodeFrameworkCommand(nodeAPIFramework.polka.command);
            break;
        case nodeAPIFramework.restify.name:
            runNodeFrameworkCommand(nodeAPIFramework.restify.command);
            break;

        default:
            break;
    }

    // showInformationMessage(`${framework} framework has been installed successfully checkout the documentation for more information ${nodeAPIFramework}`);
}

export async function runPackageJsonCommand() {
    if (!workspaceFolder) {
        showErrorMessage(messages.error.workspacefolder_error);
        return;
    }

    return new Promise<void>((resolve, reject) => {
        exec(`npm init -y`, { cwd: workspaceFolder }, (error, stdout, stderr) => {
            if (error) {
                showErrorMessage(`${messages.error.npm_error} ${error.message}`);
                return reject();
            }

            if (stderr) {
                showErrorMessage(`${messages.error.npm_stderror_error} ${stderr}`);
                return reject();
            }

            showInformationMessage(`${messages.success.stdout_success} ${stdout}`);
            resolve();
        });
    });
}
